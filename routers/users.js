const express = require('express');
const router = express.Router();

let users = [
    {name: 'Kyrylo', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Sergii', id: 3},
];

// GET /users
router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    res.json(users.filter(usr => usr.id === parseInt(req.params.id)));
});

router.post('/', (req, res) => {
    // req.body.name
    // req.body.id
    users.push({name: req.body.name, id: req.body.id});
    res.json({name: req.body.name, id: req.body.id});
});

// PUT /users/:id
router.get('/:id', (req, res) => {
    users.forEach(usr => {
        if (usr.id === parseInt(req.params.id)) {
            usr.name = req.body.new_name;
        }
    });
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    users = users.filter(usr => usr.id !== parseInt(req.params.id));
    res.sendStatus(200);
});

module.exports = router;