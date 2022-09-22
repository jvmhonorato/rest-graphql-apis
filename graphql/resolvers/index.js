const {getAllProducts, createProduct} = require('./products')

const resolvers = {
    Query: {
        getAllProducts
    },
    Mutation:{
        createProduct
    }
}

module.exports = resolvers