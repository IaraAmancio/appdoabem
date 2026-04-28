# Projeto Full Stack - (Node.js + Espress + PostgreSQL)

## 📌 Visão Geral

Este projeto é uma aplicação full stack com autenticação e CRUD básico.


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

* Cadastro de instituição
* Login
* Proteção de rotas com token JWT

### 📦 CRUD Principal

* Criar item de solicitação de doação
* Listar itens 


---

## 🧠 Fluxo da Aplicação

1. Usuário e Instituição visualiza solicitações de doações
2. Instituição faz login
3. Recebe token JWT
4. Acessa opção de cadastrar solicitação de doações
5. Realiza operações CRUD

---

## 🗄️ Banco de Dados (PostgreSQL)

### Tabela: instituição

* id
* name
* email
* password

### Tabela: solicitação

* id
* instituicao_id
* item
* descricao
* quantidade
* criado_em

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
* /cadastro
* /feed
* /cadastroSolicitacao

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


## 🚀 Deploy 

* Backend: Render 
* Frontend: Vercel
* Banco: PostgreSQL

---

## 📌 Objetivo Final

Entregar um sistema funcional com:

* autenticação
* CRUD funcionando
* frontend conectado ao backend


