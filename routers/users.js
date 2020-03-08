const express = require('express');
const users_route = express.Router();
const data = require("../data/data");
const {performance} = require('perf_hooks');

// method: GET, path: /users, id: /7
users_route.get('/:id', (req, res) => {
    const beginTime = performance.now();
    let req_id = parseInt(req.params.id);
    let userObject = null;
    for (let i = 0; i < data.length && userObject == null; i++) {
        userObject = data[i].users.find(el => el.id === req_id);
    }
    const endTime = performance.now();
    console.log("Execution time: %dms", endTime - beginTime);
    if (userObject != null) {
        res.status(200).send(userObject);
    } else {
        res.status(404).send('{}');
    }
});

module.exports = users_route;