# My Links SpaceIt 🚀

Um painel de administração simples e elegante para gerenciar e exibir seus links favoritos em uma única página.

![My Links SpaceIt Screenshot](https://via.placeholder.com/800x400?text=Admin+SpaceIt)

## 📋 Sobre o Projeto

My Links SpaceIt é uma aplicação web leve que permite criar e gerenciar uma página de links personalizada. Perfeito para criadores de conteúdo, profissionais e qualquer pessoa que queira compartilhar múltiplos links em um único lugar.

### ✨ Funcionalidades

- 🔗 Gerenciamento de links com títulos, URLs e ícones personalizados
- 🔄 Ordenação de links por prioridade
- 🔒 Painel de administração protegido por senha
- 🌓 Suporte a tema claro/escuro
- 📱 Design responsivo para dispositivos móveis
- 🖼️ Suporte para ícones personalizados ou emojis
- 🚀 Rápido e leve, sem dependências pesadas

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js com Fastify
- **Banco de Dados**: SQLite (via better-sqlite3)
- **Frontend**: HTML, CSS, JavaScript e Bootstrap 5
- **Containerização**: Docker e Docker Compose

## 🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Ou, se preferir usar Docker:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Instalação e Execução

#### Usando Node.js localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/admin-spaceit.git
   cd admin-spaceit
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   ```

5. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

#### Usando Docker

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/admin-spaceit.git
   cd admin-spaceit
   ```

2. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

3. Inicie os containers:
   ```bash
   docker-compose up -d
   ```

4. Acesse a aplicação em [http://localhost:8003](http://localhost:8003)

### Configuração

Edite o arquivo `.env` para configurar:

```
PORT=3000                    # Porta em que a aplicação será executada
SESSION_SECRET=sua_chave     # Chave secreta para sessões (mínimo 32 caracteres)
ADMIN_USERNAME=admin         # Nome de usuário para o painel admin
ADMIN_PASSWORD=senha123      # Senha para o painel admin
```

## 📝 Uso

### Página Pública

A página principal exibe todos os seus links em um layout de cards. Os visitantes podem clicar nos links para acessar os destinos.

### Painel de Administração

1. Acesse o painel de administração em `/admin`
2. Faça login com as credenciais configuradas no arquivo `.env`
3. Adicione, edite ou remova links através da interface
4. Para cada link, você pode definir:
   - Título: Nome exibido no card
   - URL: Endereço para onde o link direciona
   - Ícone: URL de uma imagem ou emoji para representar o link
   - Ordem: Número para definir a posição do link na página

## 🔄 Persistência de Dados

Os links são armazenados em um banco de dados SQLite localizado na pasta `data/`. Se estiver usando Docker, este diretório é montado como um volume para garantir a persistência dos dados.

## 🌐 Implantação

### Implantação com Docker

Para implantar em um servidor:

1. Clone o repositório no servidor
2. Configure o arquivo `.env`
3. Execute `docker-compose up -d`
4. Configure um proxy reverso (Nginx, Traefik, etc.) para expor a aplicação

### Implantação sem Docker

1. Clone o repositório no servidor
2. Configure o arquivo `.env`
3. Instale as dependências: `npm install --production`
4. Inicie a aplicação: `npm start` (ou use um gerenciador de processos como PM2)

## 🛡️ Segurança

- As credenciais de administração são armazenadas no arquivo `.env`
- As sessões são protegidas com um segredo configurável
- Recomenda-se usar HTTPS em ambiente de produção

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- [Fastify](https://www.fastify.io/) - Framework web rápido e eficiente
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para design responsivo
- [SQLite](https://www.sqlite.org/) - Banco de dados leve e sem servidor

---

Desenvolvido com ❤️ por [Gabriel Almeida](https://github.com/Gabriel1011)