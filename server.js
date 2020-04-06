const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pages = require('./routers/pages');
const users = require('./routers/users');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public')); // relative path of client-side code

app.use('/pages', pages);
app.use('/users', users);

app.listen(8080, () => console.log('May node be with you on port 8080'));