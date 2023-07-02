# RESTful API for Library Management

This is a RESTful API for a Library Management System built using Node.js, Express.js, and MongoDB. The API follows the MVC (Model-View-Controller) pattern and provides various endpoints to perform CRUD (Create, Read, Update, Delete) operations on books.

## Endpoints

- `GET /library/home`: Returns the library home page.
- `POST /library/savebook`: Saves a new book to the library.
- `PUT /library/updateBook/:id`: Updates a book's information by its ID.
- `DELETE /library/delete/:id`: Deletes a book from the library by its ID.
- `GET /library/getBookById/:id`: Retrieves a book from the library by its ID.
- `GET /library/getAllBooks`: Retrieves all books from the library.
- `GET /library/getBookByAuthor/:authname`: Retrieves books from the library by author name.
- `GET /library/getBookByName/:bookname`: Retrieves books from the library by book name.

## Book Schema

The book collection in the MongoDB database contains the following fields:

- `bookid`: ID of the book.
- `bookname`: Name of the book.
- `authorname`: Name of the author.
- `price`: Price of the book.
- `present`: Boolean value indicating if the book is present in the library.
- `bookimage`:stores path of the image.

## How to Clone this Project

To clone this project and run it on your local machine, follow these steps:

1. Install Node.js and MongoDB on your system if you haven't already.
2. Clone this repository using the following command:

   ```bash
   git clone <repository_url>
## How to run the project follow these steps:

To run the project on local machine, follow these steps.

  1. Navigate to the project directory:
     ```bash
     cd <project_directory>
  2. Install the project dependencies:
     ```bash
     npm install
  3. Start the MongoDB service on your local machine.
  4. Create a .env file in the project's root directory and configure the following environment variables:
     ```bash
     PORT=<port_number>
     MONGODB_URI=<mongodb_connection_uri>
     Replace <port_number> with the desired port number for your application, and <mongodb_connection_uri> with the connection URI for your MongoDB database.
  5. Start the application:
     ``` bash
     npm start
  6. The API should now be running on http://localhost:<port_number>.

Feel free to modify the code according to your requirements and explore the different functionalities provided by the RESTful API for Library Management.

     
     

     





