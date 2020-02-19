This step by stem tutorial to build node project with express.
------------------------------------------------------------------------------------------
- First at all initiate project with npm command: npm init
- npm install and install node-modules and auto created package.json and package.log.json
- install express body parser with npm
- install nodemon for auto rerun server
------------------------------------------------------------------------------------------
1. Added new file server.js and add next code in it.
- "express"
- "port" for listen
2. Create files "books" and "users" into the "/routers" folder
-routers
--books.js
--users.js
3. In the "server.js" as a root file add directions to the "books" and "users"
/books
/users
4. Into the "users.js" and "books" create array of objects [{},{}]
let books = [
    {name: 'books', id: 1, users_id: 1},
    {name: 'books1', id: 2, users_id: 2},
    {name: 'books2', id: 3, users_id: 3},
];
let users = [
    {name: 'Kyrylo', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Sergii', id: 3},
];
5.