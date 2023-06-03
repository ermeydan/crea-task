# Crea React Task

## Description

The project with an JWT authentication mechanism in which customers can login with a
predefined username and password. After a successful login, the user redirect to the
product list page. When a product is clicked, the user redirect to the product details
page. In that page, users can comment to product.
</br>
`Seed Username: user` </br>
`Seed Password: user123` </br>

### Requirements

- Node.js 18.16.0 LTS (Long Term Support)

### Projects Used

- React
- React Router
- Redux Toolkit
- Vite
- Mantine
- Axios
- Fastify
- SASS
- Eslint
- Prettier
- Lerna

### How To Run Project

On root directory run;

- `npx lerna run dev --scope=crea-ui` for ui
- `npx lerna run start --scope=crea-server` for API server

You can view the project visiting http://localhost:5173 

### Scripts for React App

- `dev`, starts development server.
- `build`, bundles the project for production.
- `lint`, runs eslint and fixes auto fixable problems.
- `preview`, starts local server for previewing production bundled code.
- `format`, runs prettier for file format.

### Scripts for API Server

- `dev`, starts development server.
- `build:ts`, bundles the project for production.
- `start`, starts local server for preview
