const { AuthenticationError } = require('apollo-server-express')
const {getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct} = require('./products')

//high order function
const needAuth = resolver => {
    return async(parent, args, context) => {
        if (!context.user) {
            throw new AuthenticationError('needs authentication')
        }
        return resolver(parent,args, context)
    }
}

const resolvers = {
    Query: {
        getAllProducts:needAuth(getAllProducts)
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