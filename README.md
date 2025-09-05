<div align="center">
<img src="/public/assets/Logotipo-07.png" alt="Safety Fire Logo" width="200"/>
<br/>
<h1>
🔥 Plataforma Safety Fire - Vendas e Serviços
</h1>
<strong>Uma moderna plataforma de e-commerce construída com React, Tailwind CSS e TypeScript, focada em performance, modularidade e uma experiência de usuário rica e responsiva (Mobile-First).</strong>
</div>

<div align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Badge"/>
<img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP Badge"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge"/>
</div>

<br>

🔗 Acesse a demonstração ao vivo https://safetyfireservicos.com/ <p align="center">
<em>Este projeto é a refatoração completa da antiga plataforma da Safety Fire, migrando de um sistema de páginas HTML estáticas para uma <strong>Single Page Application (SPA)</strong> dinâmica e escalável.</em>

</p>

🗺️ Índice
Features Principais

Arquitetura e Tecnologias

Destaques e Aprendizados

Como Executar Localmente

✨ Features Principais
Catálogo Dinâmico: Páginas de produtos geradas a partir de uma única fonte de dados usando React Router.

Filtragem Avançada: Sistema de filtragem por múltiplas categorias (tags).

Recomendação de Produtos: Algoritmo customizado que sugere produtos similares com base em um sistema de pontuação.

Autenticação Completa: Fluxo de Login/Cadastro com Firebase (E-mail/Senha e Google).

Carrinho Persistente: Gerenciamento de estado global com Context API e persistência no localStorage.

Componentes Modulares: UI construída com componentes reutilizáveis (FormInput, FormSelect com Headless UI), popups e layouts.

Integração com Múltiplos Backends: Comunicação com serviços distintos para e-mails e pagamentos.

💻 Arquitetura e Tecnologias Utilizadas
Categoria	Tecnologia/Conceito
Frontend	React, TypeScript, Tailwind CSS, React Router v6, Headless UI
Gerenciamento de Estado	React Context API (para Autenticação, Carrinho e Popups)
Autenticação	Firebase Authentication
Serviços de Backend	<ul><li>Pagamentos: Node.js (API para integração com AppMax)</li><li>Formulário de Contato: PHP (Endpoint para envio de e-mails com Mailgun)</li></ul>
Hospedagem	Hostinger (Frontend React + Backend PHP)

Exportar para as Planilhas
🧠 Destaques e Aprendizados do Projeto
Esta refatoração foi uma jornada de aprendizado significativa. Dois pontos se destacam:

De Páginas Estáticas a Rotas Dinâmicas
O maior ganho de produtividade foi a transição do antigo método de criar uma página HTML para cada produto. Com o React Router, implementei rotas dinâmicas (/produtos/:productId) que utilizam o hook useParams para renderizar um componente único (ProductDetails). Essa abordagem reduziu a complexidade de manutenção de forma drástica, tornando o projeto viável para o crescimento.

Algoritmo de Produtos Relacionados
Para aprimorar a experiência do usuário, desenvolvi uma lógica para sugerir produtos relevantes. Criei um sistema de pontuação (scoring system) que calcula a relevância entre produtos com base em tags compartilhadas. A mesma estrutura de dados de tags usada no filtro de produtos é reaproveitada aqui, otimizando a lógica e a consistência dos dados.

⚙️ Como Executar o Projeto Localmente
Para rodar este projeto no seu ambiente de desenvolvimento, siga os passos abaixo:

Clone o repositório:

Bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

Bash

npm install
Configure as Variáveis de Ambiente:
Crie um arquivo .env.local na raiz do projeto.

<details>
<summary><strong>Clique para ver um exemplo de .env.local</strong></summary>

Snippet de código

# .env.local
VITE_API_KEY="SUA_API_KEY_DO_FIREBASE"
VITE_AUTH_DOMAIN="SEU_AUTH_DOMAIN_DO_FIREBASE"
VITE_PROJECT_ID="SEU_PROJECT_ID_DO_FIREBASE"
VITE_STORAGE_BUCKET="SEU_STORAGE_BUCKET_DO_FIREBASE"
VITE_MESSAGING_SENDER_ID="SEU_MESSAGING_SENDER_ID_DO_FIREBASE"
VITE_APP_ID="SEU_APP_ID_DO_FIREBASE"
</details>
<br/>

Inicie o servidor de desenvolvimento:

Bash

npm run dev