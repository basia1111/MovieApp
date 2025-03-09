
# Next.js TMDB Movie App

This is a simple Next.js application that fetches and displays movies from The Movie Database (TMDB) API. The app allows users to view a list of movies, details, and images sourced from TMDB.

## Features

- Fetches movie data from TMDB API.
- Displays movie titles, images, and release dates.
- Responsive design for mobile and desktop.

## Prerequisites

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/yourusername/nextjs-tmdb-movie-app.git
cd nextjs-tmdb-movie-app
```

### 2. Install Dependencies

Next, install the necessary dependencies using npm or Yarn.

With npm:

```bash
npm install
```

With Yarn:

```bash
yarn install
```

### 3. Get TMDB API Key

You will need a TMDB API key to fetch the data. Follow these steps to get your API key:

1. Go to the [TMDB website](https://www.themoviedb.org/).
2. Create an account (or log in if you already have one).
3. Visit the [API section](https://www.themoviedb.org/settings/api) and generate a new API key.

### 4. Set Up Environment Variables

Create a `.env.local` file in the root of the project and add your TMDB API bearer token.

```env
MOVIE_API_KEY=your_api_key_here
```

Make sure to replace `your_api_key_here` with the actual token you got from TMDB.

### 5. Run the Development Server

Now that you’ve installed the dependencies and set up your environment, you can start the development server.

With npm:

```bash
npm run dev
```

With Yarn:

```bash
yarn dev
```

Your app should now be running at [http://localhost:3000](http://localhost:3000).

### 6. Build and Deploy

If you want to build the application for production:

With npm:

```bash
npm run build
npm start
```

With Yarn:

```bash
yarn build
yarn start
```

You can then deploy the app to platforms like Vercel or Netlify for easy deployment.



## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. Make sure to follow the coding conventions and write tests where applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides a clean and simple guide to get your Next.js app up and running, including how to install dependencies, get the TMDB API key, and run the development server. Let me know if you'd like to adjust any details!
