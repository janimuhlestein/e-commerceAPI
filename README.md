# e-commerceAPI
An e-commerce API backend

# About
Using Sequelize to create tables, and requests, this product makes a clean and simple backend for an e-commerce application. The api provides routes for displaying all or one product, category, or tag. Routes for updating and deleting individual items are also provided.

A through-put table is provided to bring both tags and products together for a many-to-many relationship for both.

# Usage
In order to use this product, you need to download the project and run npm install. You will need to create an ecommerce_db database. Sequelize will automatically create the tables, including the foreign keys. However, you will need to run npm run seed to seed the database.

Once you have the database set up, you can run the application by entering node server, or npm start. Access the api through http://localhost:3001/api. If you wish to work with the api through Postman or Insomnia, that works well.

# Testing
The backend has been tested manually through Insomnia. The SQL Queries are displayed in the console, as are any errors.

# Images of product in use
Get all products
![getAllProducts](https://user-images.githubusercontent.com/52082187/97102672-12f19280-166d-11eb-9e60-162c60c904f7.jpg)

Post new product
![postProduct](https://user-images.githubusercontent.com/52082187/97102683-2e5c9d80-166d-11eb-91ba-a034fbf2c1db.jpg)

Delete product
![deleteProduct](https://user-images.githubusercontent.com/52082187/97102694-50562000-166d-11eb-850e-4b47fa83af6c.jpg)

Sequelize start and database operations
![sequelizeStart](https://user-images.githubusercontent.com/52082187/97102706-5ea43c00-166d-11eb-9b55-13f7ea3b7401.jpg)

# Video of functionality
https://drive.google.com/file/d/1yVm4BkKWGoROD73nzPlEBc7ibnPgGxep/view
