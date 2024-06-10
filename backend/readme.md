# SuggestionBox Backend

The backend of SuggestionBox is a robust and efficient server-side application built with modern technologies to handle bug reports and suggestions. This component of the project is responsible for managing data, providing API endpoints, and ensuring secure and reliable communication between the frontend and the database.

## Technologies

The backend leverages the following technologies to deliver a high-performance and maintainable server-side application

- **[Express.js](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript that compiles to plain JavaScript.
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database for storing data.
- **[Mongoose](https://mongoosejs.com/)**: Elegant MongoDB object modeling for Node.js.
- **[AJV](https://ajv.js.org/)**: JSON Schema Validator for security and reliability of JavaScript applications
- **[Vitest](https://vitest.dev/)**: A blazing fast unit-test framework powered by Vite.
- **[Winston](https://github.com/winstonjs/winston)**: A versatile logging library.
- **[Swagger](https://swagger.io/)**: API documentation tool.
- **[ESLint](https://eslint.org/)**: Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## Domain Driven Design

The backend architecture follows Domain Driven Design (DDD) principles to ensure a clear separation of concerns and improve maintainability. The core domain of the application is feedback management. Each domain-specific concept, such as feedback submission and retrieval, is encapsulated within its own module. In the first version we just have one domain, feedback.

## API Versioning

To maintain backward compatibility and manage the evolution of the API, versioning is implemented. The current version of the API starts with `v1/feedback/`. This allows for iterative improvements and feature additions without disrupting existing clients.

## Layered Architecture

The backend is organized into several layers, each with a specific responsibility:

- **Router** Defines the API endpoints and routes HTTP requests to the appropriate controller.
- **Controller** Handles incoming HTTP requests, invokes the necessary service methods, and returns the appropriate responses.
- **Service** Contains the business logic and orchestrates interactions between different components.
- **Repository** Manages data persistence and retrieval from the database.
- **Model** Represents the data structures and database schemas.

## Interfaces, DTOs, and Documentation

In the root directory, general interfaces and Data Transfer Objects (DTOs) are defined. These are used to enforce consistent data structures across the application. Additionally, API documentation is generated using Swagger, providing an interactive interface for exploring and testing API endpoints.

## Core Folder

The core folder contains general-purpose code related to the server's functionality

- **Database** Manages the database connection setup and configuration.
- **Errors** Defines custom error classes and error handling logic.
- **Interfaces** Contains common interfaces, such as those for Express.js requests and responses.
- **Logger** Configures the Winston logging library for consistent and comprehensive logging.
- **Middlewares** Defines middleware functions for tasks like authentication, validation, and error handling.
- **Responses** Provides utility functions for constructing standardized API responses.
- **Server** Manages the server configuration and startup logic.
- **Swagger** Configures Swagger for API documentation.
- **Validation** Contains validation logic and schemas using AJV.

## Input Validation

Input validation is performed using JSON schemas defined with AJV. This ensures that all incoming data conforms to expected formats and constraints, enhancing security and reliability. Each API endpoint has associated validation schemas to check the integrity and validity of the data before processing it.

## Logging

The backend uses Winston for logging. Logs are configured to be written to both the console and a log file. You can customize the logging configuration in the logger.js file.
