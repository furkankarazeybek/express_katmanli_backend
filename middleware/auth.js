const utils = require('../utils/utils')
const httpStatusCodes=require('http-status-codes')

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        console.log("token :", token)
        const decodedToken = utils.helper.verifyToken(token)
        console.log("decodedToken: ",decodedToken)
        if(decodedToken.decodedToken == null) {
            return res.status(httpStatusCodes.UNAUTHORIZED).send({
                message: "UNAUTHORIZED"
            })
        }

        req.user = decodedToken
        next()
        /* return
        const decodedToken = utils.helper.verifyToken(token) */
    }
    catch(e){
        console.log("e",e)
        //baseResponse eklenebilir
        return res.status(httpStatusCodes.UNAUTHORIZED).send({
            message: "UNAUTHORIZED"
        })
    }
}