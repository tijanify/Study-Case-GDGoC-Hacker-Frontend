# Study Case GDGoC UGM Hacker Frontend

A frontend project developed as part of the GDGoC UGM Hacker Frontend recruitment assignment.

## Overview

This project is a web application introducing Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada. It provides information about the community, its values, opportunities to contribute, and a contact page.

## Features

- Dynamic navigation fetched from the API.
- Home page with community introduction and information sections.
- Values section displaying data from the API.
- Roles section displaying opportunities to contribute from the API.
- Contact page with an interactive form interface.
- Loading and error states when fetching API data.
- Responsive layout.

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- Fetch API

## API Integration

This project uses the GDGoC UGM API.

Base URL:
`https://gdgoc-ugm-api.vercel.app/api`

Endpoints used:
- `/navigation` — navigation menu data.
- `/values` — community values data.
- `/roles` — contribution roles data.

## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js
- npm

### Installation

1. Clone this repository:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd gdgoc-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── WhySection.jsx
│   ├── OurVelues.jsx
│   ├── WaysToContribute.jsx
│   ├── Responsibility.jsx
│   ├── CTAsection.jsx
│   ├── ContactPage.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css

public/
index.html
package.json
vite.config.js
```

## Author

Developed by: Alifia Lu'lua Tijani
