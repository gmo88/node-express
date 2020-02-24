const express = require('express');
const router = express.Router();
const pages = require("../data/pages");

// method: GET, path: /pages
router.get('/', (req, res) => {
    res.json(pages);
});

// method: GET, path: /pages, page index: /7
router.get('/:page_id', (req, res) => {
    let page_num_index = pages.map(i => i.page_id).indexOf(parseInt(req.params.page_id));
    if (page_num_index >= pages.length || page_num_index < 0) {
        res.status(404).send('[]');
    } else {
        res.status(200).send(pages[page_num_index]);
    }
});

router.get('/:page_id/users/:user_id', (req, res) => {
    let url_params = {
        pages_id: req.params.page_id,
        user_id: req.params.user_id
    };
    if (url_params.user_id >= 0) {
        res.status(200).send(pages[url_params.pages_id].users[url_params.user_id]);
    } else {
        res.status(404).send('{}');
    }
});

module.exports = router;