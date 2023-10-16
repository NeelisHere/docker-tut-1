const mongoose = require('mongoose')

const schema = {
    news:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
}

const newsSchema = new mongoose.Schema(schema)
const NewsModel = mongoose.model('News', newsSchema)
module.exports = NewsModel