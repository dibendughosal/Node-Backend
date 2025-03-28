# Node.js Backend API

This is a Node.js backend API built with Express.js and MongoDB, designed to manage user data.

## Features
- User registration with name and email
- MongoDB database integration
- RESTful API endpoints
- Error handling and validation
- CORS enabled for cross-origin requests

## Tech Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing middleware

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

## Usage
### Start the Server
```sh
npm start
```

### API Endpoints
#### Create User
**POST** `/createUser`
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Get All Users
**GET** `/users`

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to the branch and open a pull request.

---

Feel free to modify the details and add more endpoints based on your project requirements!

