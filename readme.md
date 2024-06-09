# SuggestionBox

*Suggestion Box* is a simple and intuitive platform that allows users to create and submit bug reports or suggestions. Users can choose to provide their name and email or submit feedback anonymously. SuggestionBox provides a seamless experience to easily submit feedbacks.

## Technologies

Suggestion Box utilizes a modern technology stack to ensure a reliable, efficient, and scalable platform, incorporating the latest tools and best practices in web development for both the backend and frontend.

For deployment, both the frontend and backend of Suggestion Box are containerized using [Docker](https://www.docker.com/products/docker-desktop/). This approach simplifies the setup and deployment process, ensuring consistency across different environments.

The project is structured as a [monorepo](https://monorepo.tools/) using [TurboRepo](https://turbo.build/), enabling developers to work on different parts of the project independently. This setup makes local development simpler and more efficient.

### Backend

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **AJV**: Another JSON Schema Validator.
- **Vitest**: A blazing fast unit-test framework powered by Vite.
- **Winston**: A versatile logging library.
- **Swagger**: API documentation tool.
- **ESLint**: Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

### Frontend

- **Vue 3**: The Progressive JavaScript Framework.
- **Nuxt**: The Intuitive Vue Framework.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **ESLint**: Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **Vitest**: A blazing fast unit-test framework powered by Vite.
- **Storybook**: UI component explorer for frontend developers.

## Install

### 1. Clone the project repository

```bash
git clone https://github.com/JohnAdib/suggestion-box.git
```

### 2. Navigate to the project directory

```bash
cd suggestion-box
```

### 3. Copy the env file

Copy the `env.sample` file in the root directory and rename it to `.env` and if you want edit the `.env` file to set your environment variables as needed.

```bash
cp env.sample .env
```

### 4. Run with Docker

Start the project using Docker. This command will build the necessary Docker images and start the containers in detached mode (`-d`).

```bash
docker-compose up -d
```

If you wann to double check, open Docker Desktop. You should see three containers running under the name `suggestion-box`.

- `mongo` Container for MongoDB database
- `backend` Container for the backend API with Express
- `frontend` Container for the UI with Nuxt

### 5. Access the application

Open your web browser and navigate to [localhost:7020](http://localhost:7020). If you've configured a different port in your `.env` file, replace 7020 with the appropriate port number. You should now see the Suggestion Box application running in your browser.

```text
http://localhost:7020
```

![Homepage of the suggestion box](doc/suggestion-box-home.png)

## TODO

- [ ] Add Storybook
