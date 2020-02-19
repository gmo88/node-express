const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routers/users');
const books = require('./routers/books');

app.use(bodyParser.json());

app.use('/users', users);
app.use('/books', books);

app.listen(8080, () => console.log('server work on port 8080'));