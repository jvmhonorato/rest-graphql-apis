const express = require('express')
const router =  express.Router()
const productsController = require('../controllers/productsController')

//deleta objeto ou campo
router.delete('/:id',productsController.remove )

//alterar dados do objeto inteiro
router.put('/:id',productsController.put)

// altela apenat um campo
router.patch('/:id',productsController.patch)

//add dados
router.post('/', productsController.create)

//buscar todos os dados
router.get('/',productsController.getAll )

// buscar dados por id
router.get('/:id',productsController.getById)

module.exports = router