const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
app.use(bodyParser.json())

//routes/products
app.use( routes)


app.listen(3000,(err)=> {
    if(err){
        console.log('not possible listen on port 3000')
    }else{
        console.log('Server runnig...')
    }
})