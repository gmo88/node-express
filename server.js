const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routers/users');

app.use(bodyParser.json());

app.use('/pages', users);

app.listen(8080, () => console.log('May node be with you on port 8080'));