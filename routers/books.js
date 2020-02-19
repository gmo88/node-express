const express = require('express');
const router = express.Router();
let books = [
    {name: 'books', id: 1, users_id: 1},
    {name: 'books1', id: 2, users_id: 2},
    {name: 'books2', id: 3, users_id: 3},
];

// GET /users
router.get('/', (req, res) => {
    res.json(books);
});

// GET /books
router.get('/', (req, res) => {
    res.json(books.filter(book => book.users_id === parseInt(req.query.users_id)));
    // res.json(req.query.users_id ? books.filter(book => book.users_id === parseInt(req.query.users_id));
});

router.put('/:id', (req, res) => {
    res.json(books.filter(usr => usr.id === parseInt(req.params.id)));
});

router.post('/', (req, res) => {
    // req.body.name
    // req.body.id
    books.push({name: req.body.name, id: req.body.id});
    res.json({name: req.body.name, id: req.body.id});
});

// PUT /books/:id
router.get('/:id', (req, res) => {
    books.forEach(usr => {
        if (usr.id === parseInt(req.params.id)) {
            usr.name = req.body.new_name;
        }
    });
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    books.filter(usr => usr.id !== parseInt(req.params.id));
    res.sendStatus(200);
});

module.exports = router;