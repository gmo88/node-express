const express = require('express');
const users_route = express.Router();
const data = require("../data/data");

// method: GET, path: /users, id: /7
users_route.get('/:id', (req, res) => {
    let req_id = parseInt(req.params.id);
    console.log(req_id);
    // let userObject = data.reduce((acc, el) => [...acc, ...el.users].filter(e => e.id === req_id), []);
    let userObject;
    for (let i = 0; i < data.length; i++) {
        console.log("data[i].users", data[i].users);
        for (let j = 0; j < data[i].users.length; j++) {
            userObject = data[i].users[j];
            console.log("userObject.id:", userObject.id);
        }
    }
    if (userObject.id === req_id) {
        res.status(404).send('{}');
    } else {
        res.status(200).send(userObject);
    }
});

module.exports = users_route;