const express = require('express');
const pages_route = express.Router();
const data = require("../data/data");
const {performance} = require('perf_hooks');

// method: GET, path: /pages
pages_route.get('/', (req, res) => {
    res.json(data);
});

// method: GET, path: /pages, page index: /7
pages_route.get('/:id', (req, res) => {
    const beginTime = performance.now();
    let req_id = parseInt(req.params.id);
    let pageObject = data.find(page => page.page_id === req_id ? page : null);
    console.log("Execution time: %dms", performance.now() - beginTime);
    if (pageObject != null) {
        res.status(200).send(pageObject);
    } else {
        res.status(404).send('[]');
    }
});

module.exports = pages_route;