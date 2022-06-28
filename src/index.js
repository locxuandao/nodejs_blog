

const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')



const app = express()
const port = 3002


//Template engine
app.engine('handlebars',handlebars.engine({
  
}))
app.set('view engine', 'handlebars')
app.set('views', './src/resources/views')


//HTTP logger
app.use(morgan('combined'))


app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})