const mongoose = require('mongoose');
const unitCartSchema = new mongoose.Schema(
    {
    
        code : {type : mongoose.Schema.Types.Number,
            ref : 'itemMaster',
            required : true 
        },
        qty : {type: Number, required: true},
        unitPrice : {type : String, required : true},
        totalAmount : {type : Number, required : true},
    
    },
    {
        versionKey : false
    }
    
)


module.exports = mongoose.model('unitCart', unitCartSchema)