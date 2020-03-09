const express = require('express');
const users_route = express.Router();
const data = require("../data/data");
const {performance} = require('perf_hooks');

// method: GET, path: /users
users_route.get('/', (req, res) => {
    const beginTime = performance.now();
    let searchName = req.query.name;
    if (searchName == null) {
        let userArray = [];
        data.forEach(page => page.users.forEach(user => userArray.push(user)));
        console.log("Execution time: %dms", performance.now() - beginTime);
        res.status(userArray.length === 0 ? 404 : 200).send(userArray);
    } else {
        let resultArray = [];
        const regExp = /^[a-zA-Z\s]+/gmi;
        if (searchName.match(regExp)) {
            data.forEach(page => page.users.forEach(user => {
                if (user.name === searchName) {
                    resultArray.push(user)
                }
            }));
            console.log("Execution time: %dms", performance.now() - beginTime);
            res.status(resultArray ? 200 : 404).send(resultArray);
        } else {
            res.status(500).send('non-alphanumeric characters');
        }
    }
});

// method: GET, path: /users, id: /7
users_route.get('/:id', (req, res) => {
    const beginTime = performance.now();
    let req_id = parseInt(req.params.id);
    let userObject = null;
    data.find(page => {
        return null != page.users.find(user => {
            if (user.id === req_id) {
                userObject = user;
                return true;
            }
            return false;
        });
    });
    const endTime = performance.now();
    console.log("Execution time: %dms", endTime - beginTime);
    res.status(userObject != null ? 200 : 404).send(userObject);
});

module.exports = users_route;