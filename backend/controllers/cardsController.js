const axios = require('axios');
const CARDS_API_URL = 'http://localhost:8000/cards'
const getCardById = async function(req,res){
    const {id} = req.query;
    console.log('id',id);
    if(!id){
        return res.status(400).send('Id is required')
    }
    try {
        const response = await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = response.data;
        if(!card.length){
            return res.status(404).json({
                msg:'Card not found'
                
            })
        }
        res.status(200).json({
            msg:'Get card succeed',
            data:card
        })
    } catch (error) {
        console.error('error',error)
    }
}
const postCard = async function(req,res){
    const newCard = req.body;
    if(Object.keys(newCard).length ===0){
        return res.status(400).send('Card is required')
    }
    try{
        await axios.post(CARDS_API_URL,newCard,{
            headers:{"Content-Type":"application/json"}
        });
        res.status(200).json({
            msg:'Card is created'
        })
    } catch (error){
        console.error('error',error)

    }
}
const deleteCardById =async function(req,res,next){
    const id = req.params.card_id;
    if(!id){
        return res.status(400).send('Id is require')
    }
    try {
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg:'Card is deleted'
        })
    } catch (error){
        console.error('error',error)
        next(error)
    }
}
module.exports = {getCardById,postCard,deleteCardById}
