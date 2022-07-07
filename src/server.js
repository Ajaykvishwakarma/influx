const express = require('express')
const cors = require('cors')

const mongoConnector = require('./configs/db')

const itemMasterController  = require('./controllers/itemMaster.controller');
const userCartController  = require('./controllers/userCart.controller');

const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 7000

app.use('/', itemMasterController)
app.use('/', userCartController)


module.exports = ()=>{
    app.listen(port, async ()=>{
        try {
            await mongoConnector()
            console.log(`Server is listening on the port ${port} `)    
        } catch (error) {
            console.log({
                message : error.message,
                status : "something goes wrong"
            })
        }
    })
}