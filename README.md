📘 Projeto – Lista de Alunos (Web + Mobile + API)

Este projeto consiste em uma aplicação completa composta por:

✔️ Front-end Web (React + Vite)

✔️ Aplicativo Mobile (Expo + React Native)

✔️ API REST (Node.js / JSON Server ou similar)

✔️ Testes automatizados no Web (Vitest + Testing Library)

As aplicações consomem a mesma API e exibem informações de alunos cadastrados.

📁 Estrutura do Repositório
/
├── web/          → Aplicação web em React + Vite
├── mobile/       → Aplicação mobile em Expo + React Native
└── api/          → Backend (JSON Server ou API real)

🌐 Aplicação Web (React + Vite)
📦 Tecnologias

React 19

Vite

Axios

React Router Dom

CSS responsivo

Vitest + Testing Library

▶️ Executar o Web

Dentro da pasta web:

npm install
npm run dev


Acesse:
👉 http://localhost:5173/

🧪 Rodar Testes
npm run test

📱 Aplicação Mobile (Expo + React Native)
📦 Tecnologias

Expo 54

React Native 0.81

React Navigation (Native Stack)

Axios

📲 Executar o Mobile

Dentro da pasta mobile:

npm install
npm start


Ou para abrir diretamente no Android:

npm run android


📌 Abra o projeto com o Expo Go escaneando o QR Code exibido no terminal.

⚠️ Observação importante sobre o Mobile

Como o aplicativo usa React Navigation Native Stack, ele não funciona em Web.

Por isso, no app.json, removemos completamente a seção "web" para evitar erros.

🗄️ API (Backend)

A aplicação utiliza uma API REST no formato:

✔️ Listar alunos

GET /alunos

✔️ Buscar aluno por ID

GET /alunos/:id

Exemplo de aluno:

{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "curso": "Engenharia",
  "matricula": "20250101"
}


Para executar a API (se estiver usando JSON Server):

json-server --watch db.json --port 3000

🎨 Estilo (Web e Mobile)

A versão Web utiliza CSS responsivo organizado em:

index.css → estilos globais

App.css → estilos específicos do componente

A versão Mobile usa o arquivo:

styles.js → estilos com StyleSheet.create

📂 Estrutura das Telas (Mobile)
🏠 HomeScreen

Lista de alunos

Botão Ver Detalhes

📄 StudentDetailsScreen

Exibe informações completas do aluno

Botão Voltar

🧪 Testes Automatizados (Web)

Foi implementado um teste verificando:

✔️ Renderização da página inicial
✔️ Renderização do título “Lista de Alunos”
✔️ Integração básica com componentes

Rodar testes:

npm run test

🚀 Resumo do que o projeto demonstra

Consumo de API no Web e Mobile

Navegação Mobile com React Navigation

Organização profissional de pastas

Estilização limpa e responsiva

Testes automatizados

Aplicação funcional em duas plataformas

👤 Autor

Daniel Borges
Projeto desenvolvido para fins acadêmicos.