# Customers and products API

Hello, welcome to the customers and products api project.

## This project allows:

To create a user:

- POST /Signup

To login with a user:

- POST /Auth

To list registrated users:

- GET /Users

To get an specific user, by his id:

- GET /User/:id

To create a product:

- POST /Product

To list registrated products:

- POST /Products

To get an specific product, by his id:

- GET /Product/:id

To get an specific product, by his id:

- GET /Product/:id

To get all products from a specific user:

- GET /User/Products/{userId}
## Live Demonstration
<!-- [Access](#) To be completed -->

## API Documentation
<!-- [Access](#) To be completed -->

## Database Documentation
[Access](https://dbdocs.io/cintra.70/products-api?schema=public&view=relationships&table=customer_address)


## Project Installation

```
yarn
```

### Compile and hot reload for development

```
yarn dev
```

### Just run the api

```
yarn start
```

## Built with:

```
Librarires: [
    'Node.js',
    'Typescript',
    'Sequelize ORM',
    'Express',
    'PostgreSQL'
    'Docker'
   ]
```