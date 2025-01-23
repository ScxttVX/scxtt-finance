# Backend Dockerfile
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do backend
COPY package*.json ./
RUN npm install
COPY . .

# Expor a porta do backend
EXPOSE 5000

# Comando para iniciar o backend
CMD ["npm", "start"]
