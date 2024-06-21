const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    symbol: { type: String, required: true },
    meaning: {type: String, required: true},
    category: {
        type: String,
        enum: ['Hiragana', 'Katakana', 'Kanji']
    },
    type: {type: String },
    addedAt: { type: Date, default: Date.now }
})

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;