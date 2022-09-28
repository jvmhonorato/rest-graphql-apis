const jwt = require('jsonwebtoken')

//middleware
const needsAuth = (req, res, next) => {
    if(req.headers && req.headers.authorization){
        const header = req.headers.authorization
        const headerParts = header.split(' ')
        const secret = 'chavesecret1234'
        try{
        const payload = jwt.verify(headerParts[1],secret)
        res.locals.user = payload.user
        console.log(payload)
        return next()
        }catch(err){}
    }
    console.log('passou no middleware')
    res.send({
        error: true,
        message: 'needs auth '
    })
}

module.exports = { 
    needsAuth 
}