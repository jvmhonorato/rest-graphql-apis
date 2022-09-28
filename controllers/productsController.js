const db = require('../db')
const Product = require('../models/products')(db)
const jwt = require('jsonwebtoken')


//remove object
const remove = async(req, res)=> {
    await Product.remove(req.params.id)
    console.log(req.body)
    res.send({
        success: true
        
    })
}

const removeImage = async(req, res)=> {
    await Product.removeImage(req.params.productId, req.params.id)
    console.log(req.body)
    res.send({
        success: true
        
    })
}
//change only fexpesific field
const patch = async (req, res)=> {


    const oldProduct = await Product.findById(req.params.id)
    if(!oldProduct){
        return res.send({
             success: false,
             message: 'Product not found'
         })
     }

    if(req.body.product){
        oldProduct.product = req.body.product
    }
    if(req.body.price){
        oldProduct.price = req.body.price
    }
    await Product.update(req.params.id, [oldProduct.product, oldProduct.price])

    //categories conditions
    if(req.body.categories){
        //update category
        try{
        await Product.updateCategories(req.params.id, req.body.categories)
       }catch(err){
        return res.send({
            success: false,
            message: 'Category not found'
        })
    }
    }
    res.send({
        success: true
        
    })
}
// change all object
const put = async(req, res)=> {
    const {product, price} = req.body
    await Product.update(req.params.id, [product, price])
    res.send({
        success: true
    
    })
}
//create a new object
const create =  async(req, res)=> {
    const {product, price} = req.body
    await Product.create([product, price])
    res.send({
        success: true,
        data: req.body
    })

}

const createImage =  async(req, res)=> {
    const {description, url} = req.body
    await Product.addImage(req.params.id, [description, url])
    res.send({
        success: true,
        data: req.body
    })

}
//search object by id
const getById = async(req,res)=> {
    const product = await Product.findById(req.params.id)
    res.send(product)
}
//serach all objects
const getAll = async(req, res)=> {
    if(req.headers && req.headers.authorization){
        const header = req.headers.authorization
        const headerParts = header.split(' ')
        const secret = 'chavesecret1234'
        try{
        jwt.verify(headerParts[1],secret)
        let products = null
        if(req.query.categoryId){
            products = await Product.findAllByCategory(req.query.categoryId)
        }else{
            products = await Product.findAll()
        }
         
         return res.send({
            products
        })

        }catch(err){
            console.log('Deu ruim!')

        }
    }
    res.send({
        error: 'Wrong auth token'
    })
   
}

module.exports = {
    remove,
    removeImage,
    patch,
    put,
    create,
    createImage,
    getById,
    getAll
}