const {getAllProducts, createProduct, deleteProduct, updateProduct} = require('./products')

const resolvers = {
    Query: {
        getAllProducts
    },
    Mutation:{
        createProduct,
        deleteProduct,
        updateProduct
    }
}

module.exports = resolvers