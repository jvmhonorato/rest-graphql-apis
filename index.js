const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//deleta objeto ou campo
app.delete('/product/:id', (req, res)=> {
    res.send({
        success: true,
        data: 'id'+ req.params.id
    })
})

//alterar dados do objeto inteiro
app.put('/products/:id',(req, res)=> {
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
    })
})
// altela apenat um campo
app.path('/products/:id',(req, res)=> {
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
    })
})

//add dados
app.post('/products', (req, res)=> {
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
    })
})
//buscar todos os dados
app.get('/products', (req,res)=> {
    res.send({
        products: ['all products']
    })
})
// buscar dados por id
app.get('/products/:id',(req, res) => {
    res.send({
        name: 'Product 1'
    })
})



app.listen(3000,(err)=> {
    if(err){
        console.log('not possible listen on port 3000')
    }else{
        console.log('Server runnig...')
    }
})