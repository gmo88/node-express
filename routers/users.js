const express = require('express');
const router = express.Router();
const users = require("../data/users");

// method: GET path: /users
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;