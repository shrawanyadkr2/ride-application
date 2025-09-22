# User Registration & Login API Documentation (Author: Shrawan)

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

---
