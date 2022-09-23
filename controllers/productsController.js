const db = require('../db')
const Product = require('../models/products')(db)
//remove object
const remove = (req, res)=> {
    console.log(req.body)
    res.send({
        success: true,
        data: 'id'+ req.params.id
    })
}
//change only fexpesific field
const patch = (req, res)=> {
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
    })
}
// change all object
const put = (req, res)=> {
    console.log(req.body)
    res.send({
        success: true,
        data: req.body
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
const getById = (req,res)=> {
    res.send({
        name: ' products 1'
    })
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