const mongoose = require('mongoose');
const itemMasterSchema = new mongoose.Schema(
    {
    
        code : {type : Number, required: true, unique: true},
        name : {type : String, required : true},
        unitPrice : {type : String, required : true}

    },{
        versionKey : false
    }
    
)


module.exports = mongoose.model('itemMaster', itemMasterSchema)