# CMSC100_Castilan06
# Student Management API

## Author
Max Miguel D. Castilan

## Code Description

This project is a Student Management API built using Node.js, Express, Mongoose, and MongoDB.

The application connects to the `StudentDatabase` database and uses the `studentData` collection to store student information.

Fields:

- `stdnum` — String
- `fname` — String
- `lname` — String
- `age` — Number

The application uses a separate server, router, controller, and model to organize its components.

###API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/save-student` | Saves a new student |
| POST | `/update` | Updates Mary Jane's last name to Parker |
| POST | `/remove-user` | Deletes a student by student number |
| POST | `/remove-all-user` | Deletes all students |
| GET | `/user?stdnum=...` | Searches for a student by student number |
| GET | `/members` | Retrieves all students |

## How to Use

1. Install Node.js and MongoDB.
2. Open MongoDB Compass and connect to `mongodb://127.0.0.1:27017`.
3. Create a database named `StudentDatabase` and a collection named `studentData`.
4. Open a terminal in the project folder.
5. Run `npm install` to install the dependencies.
6. Run `npm start` to start the server.
7. Use Postman or another API client to send requests to `http://localhost:3000`.
8. Use the API endpoints to save, search, update, and delete student records.

The server connects to MongoDB before accepting requests. Keep the MongoDB server running while using the application.
