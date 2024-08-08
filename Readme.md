# URL Shortener Project

[![Watch the video]](https://drive.google.com/file/d/19JTRJ-eESe1p5pzhXl9ape9buS1iiZ4m/view?usp=drive_link)

## Project Overview

This project is a URL shortener application with additional features such as QR code generation and separate analytics for link clicks and QR scans. The project is built with a modern tech stack and adheres to best practices for maintainability and scalability.

## Features

-   **URL Shortener:** Convert long URLs into short, easy-to-share links.
-   **QR Code Generator:** Generate QR codes for each shortened URL.
-   **Download QR:** Download the generated QR.
-   **Separate Analytics:** Track the number of clicks on each shortened link and the number of scans on each QR code.
-   **Type Safety:** Ensure type safety on the backend using Joi for request validation.
-   **No Duplicate URLs:** Prevent the same URL from being shortened more than once.
-   **Proper Code Splitting:** Maintainable and optimized codebase with proper code splitting.

### Missing Features

-   **Link Edit:** The ability to edit existing shortened links is not implemented due to time constraints.
-   **Route Splitting:** Currently, all views are on the home screen. The application can be enhanced by splitting views into various routes, but this was not implemented due to time constraints.

## Tech Stack

### Backend

-   **Node.js**: JavaScript runtime for building server-side applications.
-   **Express**: Web framework for Node.js.
-   **MySQL**: Relational database management system.
-   **Knex.js**: SQL query builder for relational databases.
-   **Joi**: Data validation library.
-   **TypeScript**: Typed superset of JavaScript.
-   **QRCode**: Library for generating QR codes.

### Frontend

-   **React**: JavaScript library for building user interfaces.
-   **Tailwind CSS**: Utility-first CSS framework.
-   **React Query**: Library for data fetching and state management in React.
-   **Axios**: Promise-based HTTP client for the browser and Node.js.
-   **TypeScript**: Typed superset of JavaScript.

## Installation and Setup

### Backend

1. Clone the repository:

    ```sh
    git clone https://github.com/your-repo/urlshortener.git
    ```

2. Navigate to the backend directory and install dependencies:

    ```sh
    cd urlshortener/backend
    npm install
    ```

3. Set up your MySQL database and update the `.env` file with your database credentials.

4. Run the migrations to set up the database schema:

    ```sh
    npx knex migrate:latest
    ```

5. Start the backend server:

    ```sh
    npm run dev
    ```

### Frontend

1. Navigate to the frontend directory and install dependencies:

    ```sh
    cd urlshortener/client
    npm install
    ```

2. Start the frontend development server:

    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Use the input field to enter a URL you want to shorten.
3. Click on the "Shorten URL" button to generate a short link and a QR code.
4. View the analytics for each link and QR code on the home screen.
