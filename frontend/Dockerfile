# Frontend Dockerfile
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do frontend
COPY package*.json ./
RUN npm install
COPY . .

# Expor a porta do frontend
EXPOSE 3000

# Comando para iniciar o frontend
CMD ["npm", "start"]
