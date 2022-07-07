const express = require('express');
const ItemMaster = require('../models/itemMaster.model');

const router = express.Router();

router.post('/items',  async (req, res) => {
    try{
        const itemMaster = await ItemMaster.create(req.body)
        return res.status(200).send(itemMaster)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})

router.get('/item', async(req, res) => {
    try{
        const itemMaster = await ItemMaster.find().lean().exec();
        return res.status(200).send(itemMaster);

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})




module.exports = router