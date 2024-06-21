const Card = require('../models/Cards');

exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.addCard = async (req, res) => {
    try {
        const {symbol, meaning, category, type} = req.body
        const newCard = new Card({
            symbol: symbol,
            meaning: meaning,
            category: category,
            type: type
        })
        const savedCard = await newCard.save();
        res.status(200).json(savedCard)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.deleteCard = async (req, res) => {
    try{
      const cardId = req.body.cardId;
      
      await Card.findOneAndDelete({_id: cardId})

      res.status(200).json('Successfully deleted')

    }catch (error){
        console.log(error);
        res.status(500).json(error)
    }
}