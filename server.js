const express = require("express")
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', 
    {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    const articles = [
        {
            title: 'title 1',
            publishDate: new Date(),
            description: "This is the first example"
        },
        {
            title: 'title 1',
            publishDate: new Date(),
            description: "This is the first example"
        }
    ]
    res.render('articles/index', {articles: articles})
})

app.listen(0914)