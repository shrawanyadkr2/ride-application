# Backend Documentation (Author: Shrawan)

## Table of Contents

- [User Registration & Login API Documentation (Author: Shrawan)](#user-registration--login-api-documentation-author-shrawan)
  - [Table of Contents](#table-of-contents)
  - [Local Setup Instructions](#local-setup-instructions)
  - [User Registration Endpoint](#user-registration-endpoint)
  - [User Login Endpoint](#user-login-endpoint)
  - [User Logout Endpoint](#user-logout-endpoint)
  - [User Profile Endpoint](#user-profile-endpoint)
  - [How to Test](#how-to-test)
- [Captain API Documentation](#captain-api-documentation)
  - [Captain Registration](#captain-registration)
  - [Captain Login](#captain-login)
  - [Captain Logout](#captain-logout)
  - [Captain Profile](#captain-profile)

## Local Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**

   ```bash
   npm start
   ```

5. **API Documentation**

   Access the API documentation at `http://localhost:4000/api-docs`.

## User Registration Endpoint

`POST /api/user/register`

### Description

Registers a new user in the system.  
Requires a JSON body with user details.  
Validates email, full name (first and last), and password.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname`: String, minimum 3 characters, required
- `fullname.lastname`: String, minimum 3 characters, required
- `email`: Valid email format, required
- `password`: String, minimum 6 characters, required

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other fields...
    },
    "token": "jwt_token"
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        ...
      }
      // or
      {
        "error": "Full name (firstname and lastname) is required"
      }
    ]
  }
  ```

#### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

## User Login Endpoint

`POST /api/user/login`

### Description

Authenticates an existing user.  
Requires a JSON body with email and password.  
Validates credentials and returns a JWT token upon success.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email`: Valid email format, required
- `password`: String, minimum 6 characters, required

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other fields...
    },
    "token": "jwt_token"
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "error": "Invalid email or password"
  }
  ```

#### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

## User Logout Endpoint

`GET /api/users/logout`

### Description

Logs out the authenticated user by blacklisting their JWT token and clearing the authentication cookie.

### Authentication

Requires a valid JWT token sent via cookie (`token`) or `Authorization` header.

### Request

No body required.  
Send the request with the authentication token in either:

- Cookie: `token`
- Header: `Authorization: Bearer <token>`

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully."
  }
  ```

## User Profile Endpoint

`GET /api/users/profile`

### Description

Returns the authenticated user's profile information.  
Requires a valid JWT token for authentication.

### Authentication

Send the JWT token in either:

- Cookie: `token`
- Header: `Authorization: Bearer <token>`

### Request

No body required.

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": "optional_socket_id"
      // other fields...
    }
  }
  ```

## How to Test

Use a tool like [Postman](https://www.postman.com/) or `curl`:

### Registration

```bash
curl -X POST http://localhost:4000/api/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

### Login

```bash
curl -X POST http://localhost:4000/api/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

### Logout

```bash
curl -X GET http://localhost:4000/api/users/logout \
  -H "Authorization: Bearer <your_jwt_token>"
```

### Profile

```bash
curl -X GET http://localhost:4000/api/users/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```

## Captain API Documentation

### Captain Registration

**Endpoint:**  
`POST /api/captains/register`

**Description:**  
Registers a new captain with vehicle details.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "Shrawan",
    "lastname": "Kumar"
  },
  "email": "shrawan29yadav@gmail.com",
  "password": "sky@12345",
  "vehicle": {
    "color": "red",
    "plate": "mp 04 XY 8277",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```

### Captain Login

**Endpoint:**  
`POST /api/captains/login`

**Description:**  
Authenticates a captain and returns a JWT token.

**Request Body:**
```json
{
  "email": "shrawan29yadav@gmail.com",
  "password": "sky@12345"
}
```

### Captain Logout

**Endpoint:**  
`GET /api/captains/logout`

**Description:**  
Logs out the authenticated captain.

### Captain Profile

**Endpoint:**  
`GET /api/captains/profile`

**Description:**  
Returns the authenticated captain's profile information.
