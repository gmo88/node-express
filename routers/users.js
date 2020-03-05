const express = require('express');
const users_route = express.Router();
const data = require("../data/data");

// method: GET, path: /users, id: /7
users_route.get('/:id', (req, res) => {
    let req_id = parseInt(req.params.id);
    let userObject = data.reduce((acc, el) => [...acc, ...el.users].filter(e => e.id === req_id), []);
    if (Array.isArray(userObject) && userObject.length) {
        res.status(200).send(userObject);
    } else {
        res.status(404).send('{}');
    }
});

module.exports = users_route;