const express = require('express');
const pages_route = express.Router();
const data = require("../data/data");

// method: GET, path: /pages
pages_route.get('/', (req, res) => {
    res.json(data);
});

// method: GET, path: /pages, page index: /7
pages_route.get('/:id', (req, res) => {
    let page_num_index = data.map(i => i.page_id).indexOf(parseInt(req.params.id));
    if (page_num_index >= data.length || page_num_index < 0) {
        res.status(404).send('[]');
    } else {
        res.status(200).send(data[page_num_index]);
    }
});

module.exports = pages_route;