# SuggestionBox Frontend

Welcome to the frontend documentation of SuggestionBox. This section provides an overview of the frontend architecture, folder structure, and technologies used to build the user interface.

## Technologies

The frontend is built with Nuxt.js 3 and TypeScript, leveraging the following technologies

- **Nuxt.js** The Intuitive Vue Framework, which enhances the development experience with features like automatic code splitting, server-side rendering, and powerful plugin system.
- **TypeScript** A typed superset of JavaScript that compiles to plain JavaScript, ensuring type safety and improved developer experience.
- **Tailwind CSS** A utility-first CSS framework for rapid UI development, allowing for easy customization and responsive design.

## Folder Structure

The frontend application follows a structured approach to organizing files and folders

```text
frontend/
├── assets/
│   └── css/
│       └── tailwind.css         # Tailwind CSS file
├── components/
│   ├── feedback/               # Feedback-related components
│   ├── form/                   # Form components
│   ├── link/                   # Link components
│   ├── footer.vue              # Footer component
│   └── header.vue              # Header component
├── composables/
│   ├── use-feedback-form.ts    # Composable for feedback form
│   └── use-feedback-list.ts    # Composable for feedback list
├── interfaces/                 # TypeScript interfaces
├── layouts/                    # Layout components
├── pages/
│   ├── index.vue               # Home page
│   └── new.vue                 # New feedback submission page
├── public/
│   ├── logo/                   # Logo assets
│   └── favicon.ico             # Favicon icon
├── server/                     # Server-related utilities
└── utils/                      # Utility functions
    ├── button/
    ├── datetime/
    ├── feedback/
    ├── fetch/
    └── validate/

```

## Folder Descriptions

- **assets/** Contains static assets like CSS files.
- **components/** Reusable UI components organized by feature.
- **composables/** Vue composables for sharing logic across components.
- **interfaces/** TypeScript interfaces for maintaining type definitions.
- **layouts/** Layout components that wrap pages.
- **pages/** Vue components for each route in the application.
- **public/** Static files like images and icons.
- **server/** Utilities related to server-side functionality.
- **utils/** Utility functions organized by functionality.
