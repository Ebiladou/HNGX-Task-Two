# Movie Website

This project, a movie website is built with react, and levarages the TMDB API for the movie data. The react application is run using vite.

## Prerequisites

To run this project locally, Node.js is required. If you do not have that installed, you can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ebiladou/HNGX-Task-Two.git

2. Navigate to the project directory

   ```bash
   cd Task-two

3. Install the dependencies either with npm or yarn

    ```bash
    npm install 
    yarn install

4. Create a BaseApi.jsx file in the service directory inside the source directory to contain your API key. Get the API key from the TMDB website.

    ```bash
    import axios from 'axios';
    const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
    api_key: 'replace with your API key', 
    language: 'en-US',
    },
  });

   export default instance;

4. To start the server, for npm or yarn, run;

    ```bash
    npm run dev
    yarn dev

Now you can click the link and open the application on your browser.