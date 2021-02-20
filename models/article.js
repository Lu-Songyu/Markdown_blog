const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            requried : true
        },
        description:{
            tyoe: String,
            required : true
        },
        publishDate:{
            type: Date,
            default: ()=> Date.now()
        }
    }
)

module.exports = mongoose.model('Article', articleSchema)