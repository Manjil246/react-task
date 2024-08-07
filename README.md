# react-task

This project is a full-stack application developed using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to manage Pokémon, including viewing, adding, updating, and deleting Pokémon data. It also includes interactive features to move, hide, and cease Pokémon on the screen.

## Features

- Add Pokémon with attributes such as owner name, direction, initial positions, speed,pokemon name and ability.
- List all added Pokémon User with options to add pokemon or delete them.
- Interactive home page to view and move Pokémon.
- Toggle visibility and motion of Pokémon.
- Full CRUD operations with a Node.js Express server.
- State management with Redux.

## Technologies Used

- React.js
- Redux
- Node.js
- Express.js
- MongoDB
- Axios
- Vite

## Repository Structure

- **backend**: Contains the server-side code
  - `index.js`: The main file that runs the server
- **frontend**: Contains the client-side code powered by Vite
  - **src**
    - **Components**
      - Other JSX components
  - **Actions**: Contains Redux action creators
  - **Reducers**: Contains Redux slices
  - **main.jsx**: Main file

## Installation

To set up the project locally, follow these steps:

1. **Download the repository as a ZIP file** from GitHub: [react-task](https://github.com/Manjil/react-task)
2. **Extract the ZIP file** to your local machine.

### Backend Setup

1. Navigate to the `backend` folder:
   ```sh
   cd backend

2. Start the backend server:
   ```sh
   npm install

3. Start the backend server:
   ```sh
   npm index.js

### Frontend Setup


1. Navigate to the `frontend` folder:
   ```sh
   cd frontend

2. Install the required dependencies:
   ```sh
   npm install

3. Start the frontend development server:
   ```sh
   npm run dev


## Deployment

The project is deployed using the following services:

- **Frontend**: Deployed on Netlify
    - [Link Text](https://manjil.netlify.app/)
- **Backend**: Deployed on Render
    - [Link Text](https://react-task-bngi.onrender.com)
- **Database**: Hosted on MongoDB Atlas
    
## Usage

### Add Pokémon:

- Navigate to the "Add User" page.
- Fill in the form with Pokémon details and User Details.
- Click "Add User" to save the User.

### View Pokémon List:

- Go to the "List All User" page to see all added User.
- Use the "Add" and "Delete" buttons to manage the Pokémon and User.

### Interactive Home Page:

- Select a user from the dropdown to view their Pokémon.
- Use the "Pokemon Go", "Pokemon Flee", and "Pokemon Cease" buttons to interact with the Pokémon.


## API Endpoints

- **PUT /pokemon/addpokemon**: Add a pokemon into existing user.
- **DELETE /pokemon/deleteuser**: Delete a user.
- **PUT /pokemon/adduser**: Add a user..
- **GET /pokemon/fetchallusers**: Fetch all users.
- **DELETE /POKEMON/deleteallusers**: Delete all users..

## Redux Setup

The application uses Redux for state management. The relevant actions, reducers, and store configuration can be found in the src directory.

### Actions

- **addUser**: Add a user into the database.
- **fetchAllUsers**: Fetches all users from the database.
- **addPokemon**: Updates Pokémon array on the detabase.
- **deleteUser**: Deletes a Pokémon from the database.
- **deleteAllUsers**: Deletes all users from the database.

### Reducers

- pokemonReducer: Manages Pokémon state.

## Store

- The Redux store is configured in store.js and includes the configuration.