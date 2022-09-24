const {getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct} = require('./products')

const resolvers = {
    Query: {
        getAllProducts
    },
    Mutation:{
        createProduct,
        deleteProduct,
        updateProduct,
        createImageOnProduct,
        deleteImageOnProduct
    }
}

module.exports = resolvers