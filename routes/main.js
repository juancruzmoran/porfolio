const express = require('express');
const router = express.Router();

const{home, about} = require('../controllers/mainContollers')

router
        .get('/', home)
        .get('/about', about)


module.exports = router;