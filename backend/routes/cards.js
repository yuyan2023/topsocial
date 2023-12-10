const express = require('express');
const {getCardById, postCard, deleteCardById} = require('../controllers/cardsController')

const cardsRouter = express.Router();
cardsRouter.get('/',getCardById)
cardsRouter.post('/',postCard)
cardsRouter.delete('/:card_id',deleteCardById)
module.exports = cardsRouter;