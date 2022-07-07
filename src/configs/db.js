const mongoose = require('mongoose')
const mongoDB = "mongodb://localhost:27017/influx";
module.exports = ()=>mongoose.connect(mongoDB)