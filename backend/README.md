# User Registration API Documentation (Auther: Shrawan)

## Endpoint

`POST /api/user/register`

## Description

Registers a new user in the system.  
Requires a JSON body with user details.  
Validates email, full name (first and last), and password.

## Request Body

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

### Field Requirements

- `fullname.firstname`: String, minimum 3 characters, required
- `fullname.lastname`: String, minimum 3 characters, required
- `email`: Valid email format, required
- `password`: String, minimum 6 characters, required

## Responses

### Success

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

### Validation Error

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

### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

## How to Test

Use a tool like [Postman](https://www.postman.com/) or `curl`:

```bash
curl -X POST http://localhost:4000/api/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

---