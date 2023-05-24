# Users and products API

Hello, welcome to the users and products api project.

## This project allows:

To create a user:

- POST /Signup

To login with a user:

- POST /Auth

To list registrated users:

- GET /Users

To get an specific user, by his id:

- GET /User/:id

To update data from an specific user, by his id:

- PUT /User/:id

To create a product:

- POST /Product

To list registrated products:

- POST /Products

To get an specific product, by his id:

- GET /Product/:id

To update data from an specific product, by his id:

- PUT /Product/:id

To get all products from a specific user:

- GET /User/Products/{userId}

## Live Demonstration
[Access](http://44.209.158.168:3000/welcome)

Hosted by AWS Lightsail, machine and database


## API Documentation
[Access](https://documenter.getpostman.com/view/1219793/2s93m612N3)

## Database Documentation
![My image](https://danielcintra-s3-bucket.s3.amazonaws.com/Users+and+products+api.png)
---
[Access](https://dbdocs.io/cintra.70/Users-and-products-api)

### Just run the api (With Docker)
```
docker compose up
```

### Project Installation (Without Docker)

```
npm i
```

### Just run the api (Without Docker)

```
npm run start
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
