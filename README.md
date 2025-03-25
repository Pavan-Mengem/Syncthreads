# React Map Authentication Application

This project is a React application that integrates a map using an open-source mapping library, implements secure authentication, and provides a visually appealing user interface. The application consists of a frontend built with React and a backend developed using Node.js and Express.

## Table of Contents

- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Components Overview](#components-overview)
- [Styling](#styling)
- [Deployment](#deployment)
- [License](#license)

## Getting Started

To get started with this project, you will need to clone the repository and install the necessary dependencies for both the frontend and backend.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-map-auth-app
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

## Frontend Setup

To run the frontend application, navigate to the `frontend` directory and use the following command:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Backend Setup

To run the backend application, navigate to the `backend` directory and use the following command:

```
npm start
```

The API will be available at `http://localhost:8000/api`.

## API Endpoints

- **POST** `/api/v1/login`: Authenticates the user and returns a JWT token.
- **GET** `/api/v1/dashboard`: Retrieves dashboard data (protected route).
- **GET** `/api/v1/map`: Retrieves map-related data (protected route).

## Components Overview

- **Login**: A component for user authentication with input fields for username and password.
- **Dashboard**: Displays card components with unique IDs for navigation.
- **MapView**: Integrates the mapping library to display the map of India.

## Styling

The application uses CSS for styling, ensuring a responsive and visually appealing design. Custom styles can be found in the `src/styles/styles.css` file.

## Deployment

The backend can be deployed on platforms like Heroku or AWS, while the frontend can be deployed on Netlify or Vercel. Ensure that the frontend is configured to point to the deployed backend API.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

