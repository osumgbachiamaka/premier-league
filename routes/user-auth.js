const express = require('express');
const router = express.Router();

const users = require('../controllers/user-auth')

router.post('/create/v1', users.userCreate)
router.post('/login/v1', users.userLogin)

module.exports = router