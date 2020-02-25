const express = require('express');
const router = express.Router();
const data = require("../data/data");

// method: GET, path: /pages
router.get('/', (req, res) => {
    res.json(data);
});

// method: GET, path: /pages, page index: /7
router.get('/:page_id', (req, res) => {
    let page_num_index = data.map(i => i.page_id).indexOf(parseInt(req.params.page_id));
    if (page_num_index >= data.length || page_num_index < 0) {
        res.status(404).send('[]');
    } else {
        res.status(200).send(data[page_num_index]);
    }
});

router.get('/:page_id/users/:user_id', (req, res) => {
    let url_params = {
        pages_id: req.params.page_id,
        user_id: req.params.user_id
    };
    if (url_params.user_id >= 0) {
        res.status(200).send(data[url_params.pages_id].users[url_params.user_id]);
    } else {
        res.status(404).send('{}');
    }
});

module.exports = router;