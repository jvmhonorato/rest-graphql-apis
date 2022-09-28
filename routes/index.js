const express = require('express')
const router = express.Router()
const products = require('./productsRouter')
const auth = require('./authRouter')



//middleware
const middleware = (req, res, next) => {
    console.log('passou no middleware')
    next()
}

//map routes
router.use('/products', products)
router.use('/auth', auth)



module.exports = router