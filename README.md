# anavaradha-codes

Welcome to the **anavaradha-codes** project! This is a personal portfolio website built using **React**, **Vite**, **TypeScript**, and styled with **Tailwind CSS**. This application showcases my skills, projects, and experience as a software developer.The site is deployed at anavaradha.codes.

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

### Tailwind CSS Configuration

1. Install Tailwind CSS and its peer dependencies via npm:

   ```
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Initialize Tailwind CSS: (This command creates a tailwind.config.js and a postcss.config.js file in your project)

   ```
   npx tailwindcss init -p

   ```

3. Configure the tailwind.config.js file to specify the paths to all of your template files:

   ```
   module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your project structure
      ],
      theme: {
        extend: {},
      },
      plugins: [],
   };

   ```

4. Add the Tailwind directives to your CSS file (e.g., index.css or App.css):

   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   ```

5. Start your development server:

   ```
   npm run dev
   ```

### Building for Production

1. To create an optimized build of the application, run:

   ```
   npm run build
   ```

The built files will be generated in the `dist` directory.

### Deployment

The application is deployed to Azure Blob Storage using an automated CI/CD pipeline configured with GitHub Actions and Terraform.

#### Deployment Process

1. Infrastructure as Code (IaC): Terraform is used to define and provision the necessary Azure resources, including the storage account for hosting the static website.

2. GitHub Actions: The CI/CD pipeline is triggered on pushes to the main branch. The pipeline consists of:

- Build & Deploy Job: This job installs dependencies, runs linter checks, builds the React application, uploads the build artifacts to Azure Blob Storage, and purges the Azure Front Door cache.

3. Automated Deployment: The automated pipeline ensures that the latest version of the application is deployed every time changes are pushed to the main branch
