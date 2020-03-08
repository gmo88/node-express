const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pages = require('./routers/pages');
const users = require('./routers/users');

app.use(bodyParser.json());

app.use('/pages', pages);
app.use('/users', users);

app.listen(8080, () => console.log('May node be with you on port 8080'));