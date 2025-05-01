FROM node:20-alpine

# Instalar SQLite e ferramentas de compilação
RUN apk add --no-cache \
  python3 \
  make \
  g++ \
  gcc \
  sqlite \
  sqlite-dev

# Criar diretório da aplicação
WORKDIR /app

# Copiar arquivos de dependências primeiro (para aproveitar o cache do Docker)
COPY package*.json ./
COPY .env ./

# Instalar dependências
RUN npm ci --only=production

# Copiar o código da aplicação
COPY . .

# Criar diretório de dados se não existir
RUN mkdir -p data

# Expor a porta que a aplicação usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]