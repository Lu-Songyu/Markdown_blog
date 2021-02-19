const express = require("express")
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

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