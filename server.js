const path = require('path');
const fastify = require('fastify')({ logger: true });
const fastifyStatic = require('@fastify/static');
const fastifyFormBody = require('@fastify/formbody');
const fastifyCookie = require('@fastify/cookie');
const fastifySession = require('@fastify/session');
const Database = require('better-sqlite3');
require('dotenv').config();

// Configuração do banco de dados
const db = new Database(path.join(__dirname, 'data', 'links.db'));

// Inicialização do banco de dados
db.exec(`
  CREATE TABLE IF NOT EXISTS links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT NOT NULL,
    order_num INTEGER DEFAULT 0
  );
`);

// Registrar plugins
fastify.register(fastifyFormBody);
fastify.register(fastifyCookie);
fastify.register(fastifySession, {
  secret: process.env.SESSION_SECRET || 'um_segredo_muito_secreto',
  cookie: { secure: false },
});
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
});

// Middleware de autenticação
const authenticate = async (request, reply) => {
  if (!request.session.authenticated) {
    return reply.redirect('/login');
  }
};

// Rotas
fastify.get('/', async (request, reply) => {
  const links = db.prepare('SELECT * FROM links ORDER BY order_num ASC').all();
  return reply.sendFile('index.html');
});

fastify.get('/api/links', async (request, reply) => {
  const links = db.prepare('SELECT * FROM links ORDER BY order_num ASC').all();
  return links;
});

fastify.get('/login', async (request, reply) => {
  return reply.sendFile('login.html');
});

fastify.post('/login', async (request, reply) => {
  const { username, password } = request.body;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    request.session.authenticated = true;
    return reply.redirect('/admin');
  }

  return reply.redirect('/login?error=1');
});

fastify.get('/admin', { preHandler: authenticate }, async (request, reply) => {
  return reply.sendFile('admin.html');
});

fastify.post('/api/links', { preHandler: authenticate }, async (request, reply) => {
  const { title, url, icon, order_num } = request.body;

  const stmt = db.prepare('INSERT INTO links (title, url, icon, order_num) VALUES (?, ?, ?, ?)');
  const result = stmt.run(title, url, icon, order_num || 0);

  return { id: result.lastInsertRowid };
});

fastify.put('/api/links/:id', { preHandler: authenticate }, async (request, reply) => {
  const { id } = request.params;
  const { title, url, icon, order_num } = request.body;

  const stmt = db.prepare('UPDATE links SET title = ?, url = ?, icon = ?, order_num = ? WHERE id = ?');
  stmt.run(title, url, icon, order_num || 0, id);

  return { success: true };
});

fastify.delete('/api/links/:id', { preHandler: authenticate }, async (request, reply) => {
  const { id } = request.params;

  const stmt = db.prepare('DELETE FROM links WHERE id = ?');
  stmt.run(id);

  return { success: true };
});

fastify.get('/logout', async (request, reply) => {
  request.session.destroy();
  return reply.redirect('/login');
});

// Iniciar o servidor
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();