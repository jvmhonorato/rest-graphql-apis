const jwt = require('jsonwebtoken')
const secret = 'chavesecret1234'



const USERS = {
'vituhonorato.89@gmail.com': 'abc123'
}


const auth = async(req, res)=> {
    const {user, password}= req.body
    //check if user exists in USERS and check  password
    if(USERS[user]&& USERS[user]=== password){
        const token = jwt.sign({
            user:{
                id: 1,
                name:'Victor'
            }
        },secret, {expiresIn:'2 days' } )
        return res.send({
            success: true,
            token
        })

    }
    
    res.send({
        success: false,
        message: 'Wrong crendentials'
        
    })
}



module.exports = {
auth

}