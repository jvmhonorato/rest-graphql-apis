const db = require('../db')
const Product = require('../models/products')(db)
//remove object
const remove = async(req, res)=> {
    await Product.remove(req.params.id)
    console.log(req.body)
    res.send({
        success: true
        
    })
}
//change only fexpesific field
const patch = async (req, res)=> {

    const oldProduct = await Product.findById(req.params.id)
    if(req.body.product){
        oldProduct.product = req.body.product
    }
    if(req.body.price){
        oldProduct.price = req.body.price
    }
    await Product.update(req.params.id, [oldProduct.product, oldProduct.price])
    console.log(req.body)
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
//search object by id
const getById = async(req,res)=> {
    const product = await Product.findById(req.params.id)
    res.send(product)
}
//serach all objects
const getAll = async(req, res)=> {
    const products = await product.findAll()
    res.send({
        products
    })
}

module.exports = {
    remove,
    patch,
    put,
    create,
    getById,
    getAll
}