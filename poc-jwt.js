const jwt = require('jsonwebtoken')
const secret = 'chavesecret1234'
const token = jwt.sign({
    user:{
        id: 1,
        name:'Victor'
    }
},secret, {expiresIn:'2 days' } )

try{
jwt.verify(token, secret)
}catch{
    console.log(err)
}
console.log(token)