const express = require('express');
const UserCart = require('../models/userCart.model');

const router = express.Router();

router.post('/order/orderid',  async (req, res) => {
    try{
        const userCart = await UserCart.create(req.body)
        return res.status(200).send(userCart)
    }
    catch (error) {
        return res.status(500).send({message: error.message})
    }
})



router.get('/order', async(req, res) => {
    try{
        const userCart = await UserCart.find().lean().exec();
        return res.status(200).send(userCart);

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})


router.get('/order/:id',  async(req, res) => {
    try{
        const userCart = await UserCart.findById(req.params.id).lean().exec()
        return res.status(200).send(userCart)

    } catch(error) {
        return res.status(500).send({message : error.message})
    }

})


router.get("/order/orderid/summarize", async (req, res) => {
    try {
      const userCart = await UserCart.find().lean().exec();
  
      res.status(200).send(UserCart);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });





module.exports = router