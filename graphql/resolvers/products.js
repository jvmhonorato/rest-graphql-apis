const db = require('../../db')
const Product = require('../../models/products')(db)




const getAllProducts = async (parent, {filter}, context) => {
  
   
    let products = null
    if(filter && filter.categoryId){
        products = await Product.findAllByCategory(filter.categoryId)
    }else{
        products = await Product.findAll()
    }
    return products
}

const  createProduct = async(context,{input})=> {
    
    const {product, price} = input
    await Product.create([product, price])

    return{
        product, price
    }
}
const createImageOnProduct = async(context, {productId, input})=> {
const {description,url} = input
await Product.addImage(productId, [description, url])
return {
    description,
    url
}
}

const deleteProduct = async(context, { id }) => {
    
    await Product.remove(id)
    return true
}
const updateProduct = async(context, {id, input}) => {
    const oldProduct = await Product.findById(id)
    console.log(id, oldProduct)
    if(!oldProduct){
        
            throw new ApolloError('Product not found')
         
     }

    if(input.product){
        oldProduct.product = input.product
    }
    if(input.price){
        oldProduct.price = input.price
    }
    await Product.update(id, [oldProduct.product, oldProduct.price])

    //categories conditions
    if(input.categories){
        //update category
        try{
        await Product.updateCategories(id, input.categories)
       }catch(err){
         throw new ApolloError('ProductCategories not found')
       }
    }
    return oldProduct
}
const deleteImageOnProduct = async(context, {productId, id})=> {
    await Product.removeImage(productId, id)
    return true
}


    module.exports = {
        getAllProducts,
        createProduct,
        createImageOnProduct,
        deleteImageOnProduct,
        deleteProduct,
        updateProduct

    }