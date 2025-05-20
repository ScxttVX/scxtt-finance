# 💸 scxtt-finance

**scxtt-finance** é uma aplicação web para controle e visualização de dados financeiros. O sistema permite o cadastro de valores da bobina, cálculo automático do custo por cm² e gerenciamento de produtos com base nesses dados. Ideal para empresas ou profissionais que lidam com chapas, calhas e estruturas metálicas.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React + TypeScript + Vite
- **Estilo:** Tailwind CSS
- **Componentes:** shadcn/ui
- **Ícones:** lucide-react
- **Animações:** framer-motion
- **Build Tool:** Vite

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js >= 18
- NPM ou Yarn

### Passos para execução

```bash
# Clone o repositório
git clone https://github.com/ScxttVX/scxtt-finance.git
cd scxtt-finance

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse no navegador:
http://localhost:5173
```


## 🧮 Funcionalidades
# 📐 Aba "Dados"
- Cadastro do valor da bobina em R$
- Definição da metragem e largura em cm
- Cálculo automático do custo por centímetro quadrado

## 🛒 Aba "Adicionar Produto"
- Adição de produtos com nome e valor em cm²
- Cálculo automático do valor total com base no custo por cm²

# 📊 Aba "Relatório Financeiro"
- Listagem de todos os produtos cadastrados
- Visualização clara de valores e total acumulado

## 📌 Melhorias futuras (roadmap)
- Armazenamento persistente (LocalStorage ou banco de dados)
- Filtro e busca de produtos
- Exportação de relatório (PDF/Excel)
- Suporte a múltiplas bobinas e perfis

## 🤝 Contribuições
Contribuições são bem-vindas!
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias e novas funcionalidades.
