# Example Express Server

### Setup

- git clone

- npm install

- npm run dev

### Endpoints

#### users

- GET ALL USERS =  /users

- GET USER BY ID = /users/:id

- CREATE USER = /users (send body with name & lasname - POST)

    Example: {
        name: "Carlos",
        lastName: "Perez"
    }

- UPDATE USER = /users/:id (send body same as create - PUT)

- DELETE USER = /users/:id

#### products

- GET ALL USERS =  /products

- GET USER BY ID = /products/:id

- CREATE USER = /products (send body with name & price - POST)

    Example: {
        name: "Keyboard RedDragon",
        price: 3000
    }

- UPDATE USER = /products/:id (send body same as create - PUT)

- DELETE USER = /products/:id