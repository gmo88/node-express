const express = require('express');
const users_route = express.Router();
const data = require("../data/data");

// method: GET, path: /users, id: /7
users_route.get('/:id', (req, res) => {
    let req_id = parseInt(req.params.id);
    let users_data = data.map(e => e.users);
    let users_length = users_data.flat().length;
    if (req_id <= users_length && users_length >= 0) {
        let getUserById = data.reduce((acc, el) => [...acc, ...el.users].filter(e => e.id === req_id), []);
        res.status(200).send(getUserById);
    } else {
        res.status(404).send('{}');
    }
});

module.exports = users_route;