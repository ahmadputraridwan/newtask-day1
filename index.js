const express = require('express')
const path = require ('path')
const app = express()
const port = 4000

// app.set = buat setting variabel global, configuration dll
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'src/views'))

app.use(express.static('src/assets'))
app.use(express.urlencoded({ extended: false }))  // body parser, extended : false -> querystring, extended : true -> menggunakan querystring third party -> qs


app.get('/', home)
app.get('/contact', contact)
app.get('/blog-detail', blogDetail)
app.get('/add-blog', addBlog)
app.post('/add-blog', addBlogViews)
app.get('/blog', blog)
app.get('/testimoni', testimoni)


function home(req, res){
  res.render('index')
}
function contact(req,res){
  res.render('contact')
}
function blogDetail(req,res){
  const data = {
    id: '1',
    pName: 'pName 1',
    description: 'description saya adalah'
  }
  res.render('blog-detail', {data})
}
function addBlog(req,res){
  res.render('add-blog')
}
function addBlogViews(req, res){
  const pName = req.body.pName
  const startDate = req.body.startDate
  const endDate = req.body.endDate
  const description = req.body.description
  const JS = req.body.JS
  const java =  req.body.java
  const phyton = req.body.phyton
  const node = req.body.node
  
  res.redirect('blog')
}
function blog (req,res){
  res.render('blog')
}

function testimoni(req,res){
  res.render('testimoni')
}

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`)
})

