const express = require('express');
const router = express.Router();
const pages = require("../data/pages");

// method: GET, path: /pages
router.get('/', (req, res) => {
    res.json(pages);
});

// method: GET, path: /pages, page index: /7
router.get('/:id', (req, res) => {
    // request id
    let page_num_index = pages.map(i => i.page_id).indexOf(parseInt(req.params.id));

    pages.reduce((acc, val, idx) => {
        if (val.page_id === page_num_index) {
            console.log(val.users);
            return val.users;
        } else {
            console.log("404 error");
            return "404 error";
        }
    }, []);

    // res.json(pages.filter(page => page.page_id['user'] === parseInt(req.params.id)));
    // console.log("req.params.id:", parseInt(req.params.id));
    // console.log("req.query:", req.query);
    // console.log("filter:", pages.filter(item => item["user"] === parseInt(req.params.id)));
    // console.log("users:", pages.map(item => item.users));
});

module.exports = router;