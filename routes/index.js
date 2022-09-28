const express = require('express')
const router = express.Router()
const products = require('./productsRouter')
const auth = require('./authRouter')

router.use('/products', products)
router.use('/auth', auth)



module.exports = router