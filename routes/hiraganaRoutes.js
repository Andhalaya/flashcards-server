const express = require('express');
const router = express.Router();
const {getAll, getGroup} = require('../controllers/hiragana')

router.get('/', getAll );
router.get('/group', getGroup)

module.exports = router;