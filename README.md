# anavaradha-codes

Welcome to the **anavaradha-codes** project! This is a personal portfolio website built using **React**, **Vite**, **TypeScript**, and styled with **Tailwind CSS**. This application showcases my skills, projects, and experience as a software developer. The site is deployed at https://www.anavaradha.codes.

## Features

- **Responsive Design**: The website is fully responsive and adapts to various screen sizes.
- **Fast Loading**: Leveraging Vite for a quick development experience and optimized production builds.
- **Modern UI**: A clean and modern interface powered by Tailwind CSS.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool that provides a fast and efficient development environment.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Azure**: The application is deployed to Azure using automated CI/CD pipelines powered by GitHub Actions.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anavaradha-sankar/anavaradha-codes.git
   ```

2. Navigate to the project directory:
   ```
   cd anavaradha-codes
   ```
3. Install the dependencies:
   ```
   npm install
   ```

4. Start the dev server:

   ```
   npm run dev
   ```

### Editing content

All text on the site (roles, skills, education, contact links) lives in `src/data.ts`. Tailwind is compiled by Vite through `postcss.config.js`, and the colour and font tokens are in `tailwind.config.js`.
