const express = require('express')
const router = express.Router()
const products = require('./productsRouter')

router.use('/products', products)



module.exports = router