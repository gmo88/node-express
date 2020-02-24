const express = require('express');
const router = express.Router();
const pages = require("../data/pages");

// method: GET, path: /pages
router.get('/', (req, res) => {
    res.json(pages);
});

// method: GET, path: /pages, page index: /7
router.get('/:id', (req, res) => {
    let page_num_index = pages.map(i => i.page_id).indexOf(parseInt(req.params.id));
    console.log(typeof page_num_index);
    if (page_num_index >= pages.length || page_num_index < 0) {
        res.status(404).send('[]');
    } else {
        res.status(200).send(pages[page_num_index]);
    }
});
module.exports = router;