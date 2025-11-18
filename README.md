# Server-Side Validation with Node.js

A Node.js project demonstrating server-side form data validation, user authentication with JWT, and MongoDB integration.

## Features

- **Multi-folder structure:**  Organized project structure with separate folders for routes, controllers, models, and middlewares.
- **Form Validation:** Validates form data on the server-side to ensure data integrity.
- **User Authentication:** Implements user registration and login with JWT (JSON Web Tokens) for secure authentication.
- **MongoDB Integration:** Connects to a MongoDB database to store user and form submission data.
- **Error Handling:** Includes a global error handling middleware to catch and handle errors gracefully.
- **Request Logging:** Logs incoming requests for debugging and monitoring.

## Technologies Used

- Node.js
- Express.js
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- express-validator
- dotenv
- cors

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    cd <project_directory>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    - Create a `.env` file in the root directory.
    - Add the following variables, replacing the values with your own:

        
        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/your_database_name
        JWT_SECRET=your_jwt_secret_key
        

4.  Run the application:

    
    npm start
    

## API Endpoints

### User Authentication

-   `POST /api/users/register`: Register a new user.
    -   Request body:
        
        {
            "username": "<username>",
            "password": "<password>",
            "email": "<email>"
        }
        

-   `POST /api/users/login`: Login an existing user.
    -   Request body:
        
        {
            "username": "<username>",
            "password": "<password>"
        }
        
    -   Response: Returns a JWT token upon successful login.

-   `GET /api/users/profile`: Get user profile information (requires authentication).
    -   Headers:  Include the JWT token in the `Authorization` header as `Bearer <token>`.

### Form Submission

-   `POST /api/forms/submit`: Submit a form (requires authentication and validation).
    -   Headers: Include the JWT token in the `Authorization` header as `Bearer <token>`.
    -   Request body:
        
        {
            "name": "<name>",
            "email": "<email>",
            "message": "<message>"
        }
        

## Error Handling

The application includes a global error handling middleware that catches errors and returns appropriate error responses.  Validation errors will return a 400 status code.  Server errors return 500.

## Contributing

Contributions are welcome! Please submit a pull request with your changes.
