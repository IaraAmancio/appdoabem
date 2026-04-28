# Projeto Full Stack - (Node.js + Espress + PostgreSQL)

## 📌 Visão Geral

Este projeto é uma aplicação full stack com autenticação e CRUD básico.

O sistema é dividido em duas partes:

* **Backend:** API REST
* **Frontend:** Interface do usuário

---

## 🧰 Stack Utilizada

### Backend

* Node.js
* Express
* PostgreSQL
* JWT (autenticação)
* bcrypt (hash de senha)

### Frontend

* React
* SCSS
* Axios
* React Router DOM

---

## 🏗️ Estrutura do Projeto

```
project/
 ├── backend/
 │    ├── src/
 │    │    ├── routes/
 │    │    ├── controllers/
 │    │    ├── middlewares/
 │    │    └── server.js
 │    └── database.sql
 │
 ├── frontend/
 │    ├── src/
 │    │    ├── pages/
 │    │    ├── components/
 │    │    ├── services/
 │    │    └── App.jsx
```

---

## ⚙️ Funcionalidades

### 🔐 Autenticação

* Cadastro de usuário
* Login
* Proteção de rotas com token JWT

### 📦 CRUD Principal

* Criar item
* Listar itens
* Atualizar item
* Deletar item

---

## 🧠 Fluxo da Aplicação

1. Usuário se cadastra
2. Faz login
3. Recebe token JWT
4. Acessa dashboard
5. Realiza operações CRUD

---

## 🗄️ Banco de Dados (PostgreSQL)

### Tabela: users

* id
* name
* email
* password

### Tabela: items (exemplo CRUD principal)

* id
* title
* description
* created_at

---

## 🚀 Backend - Rotas principais

### Auth

* POST /register
* POST /login

### CRUD

* GET /items
* POST /items
* PUT /items/:id
* DELETE /items/:id

---

## 💻 Frontend - Páginas

* /login
* /register
* /dashboard

---

## 🔗 Comunicação Frontend ↔ Backend

O frontend consome a API usando Axios:

```js
axios.get('/items')
axios.post('/items', data)
axios.put('/items/:id', data)
axios.delete('/items/:id')
```

---

## 🎨 UI

* Tailwind CSS para estilização
* Layout simples e responsivo
* Foco em funcionalidade (MVP)

---

## ⚡ Regras do MVP (IMPORTANTE)

Para entrega rápida em 1 dia:

* Apenas 1 CRUD principal
* Sem features avançadas
* Sem painel complexo
* Sem microserviços
* Sem otimizações extras

---

## 🧪 Testes

* Testar API com Postman
* Testar fluxo completo no frontend

Fluxo obrigatório:

1. Cadastro
2. Login
3. Criar item
4. Listar itens
5. Editar item
6. Excluir item

---

## 🚀 Deploy (opcional)

* Backend: Render / Railway
* Frontend: Vercel
* Banco: Supabase / Railway PostgreSQL

---

## 📌 Objetivo Final

Entregar um sistema funcional com:

* autenticação
* CRUD funcionando
* frontend conectado ao backend

---

## ⏱️ Estratégia de Desenvolvimento (1 dia)

* 2h planejamento + setup
* 4h backend
* 4h frontend
* 2h testes + ajustes + deploy

---

## 👨‍💻 Status do Projeto

MVP pronto para entrega inicial
