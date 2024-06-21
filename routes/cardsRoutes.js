const express = require('express');
const router = express.Router();
const {getCards, addCard, deleteCard} = require('../controllers/cards')

router.get('/', getCards );
router.post('/new', addCard);
router.delete('/delete', deleteCard);

module.exports = router;