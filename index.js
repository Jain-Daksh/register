const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('sequelize')


require('./routes/user.routes')(app);
const port = process.env.PORT || 3000
app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json())





app.use('/' , express.static(path.join(__dirname , 'static')))

app.listen(port,()=>{
    console.log(`server working on ${port}`)
})
