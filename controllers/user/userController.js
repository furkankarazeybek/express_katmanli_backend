const userService=require('../../service/User/userService')
const httpStatusCodes=require('http-status-codes')
const utils=require('../../utils/utils')
/**
 * @swagger
 *
 * /api/v1/user/getAll:
 *   get:
 *     summary: Tüm Kullanıcıları Getirir
 *     tags:
 *       - User   
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *          description: Tüm List   
 *          content:
 *            application/json:
 *              schema:
 *                type: array  
 */

exports.getAll=async (req,res,next) => {
    try{
        const result = await userService.getAll(req)
        res.json(result).status(httpStatusCodes.StatusCodes.OK);
    }
    catch(error){
        
        console.log(utils.logger.error(error.message));
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)

    }
}


exports.getBlogsByUserId = async (req,res,next) => {

    try{
        const result = await userService.getBlogsByUserId(req)
        res.json(result).status(httpStatusCodes.StatusCodes.OK);
    }
    catch(error){
        
        console.log(utils.logger.error(error.message));
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)

    }
     
}

exports.getBlogsByName = async (req,res,next) => {

    try{
        const result = await userService.getBlogsByName(req)
        res.json(result).status(httpStatusCodes.StatusCodes.OK);
    }
    catch(error){
        
        console.log(utils.logger.error(error.message));
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)

    }
     
}



exports.create= async (req,res,next) => {

    try{
        const result = await userService.create(req)
        res.json(result).status(httpStatusCodes.StatusCodes.OK);
    }
    catch(error){
        
        console.log(utils.logger.error(error.message));
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)

    }
     
}


exports.signIn = async (req,res,nest) => {
  
        
        const result = await userService.signIn(req)
        res.json(result).status(httpStatusCodes.StatusCodes.OK);
   
  
  
}

exports.getById= async (req,res,next) => {
    try{
        const result = await userService.getById(req)
        res.json(result).status(StatusCodes.OK)
      
    }
    catch(error){
        console.log(utils.logger.error(error.message))
        res.json({ error: error.message }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)
    }

}

exports.updateById= async (req,res,next) => {

  
        const result = await userService.updateUserById(req)
        if(result.data===null) {
            res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json(result)
        }
        res.json(result).status(httpStatusCodes.StatusCodes.OK);

   
}

exports.findByEmail= async (req,res,next) => {

        try{
            const result = await userService.findByEmail(req)
            res.json(result).status(httpStatusCodes.StatusCodes.OK);
        }
        catch(error){
            
            console.log(utils.logger.error(error.message));
            res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)
    
        }
        
}

exports.findByName= async (req,res,next) => {

    try{
        const result = await userService.findByName(req)
        res.json(result).status(httpStatusCodes.StatusCodes.OK);
    }
    catch(error){
        
        console.log(utils.logger.error(error.message));
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)

    }
    
}

exports.updateProfilePicture = async (req, res, next) => {
    try {
        const result = await userService.updatePhoto(req)
        res.json(result)
    } catch (error) {
        utils.logger.error(error.message)
        res.json( "Bu bir hata mesajı" )
    }

}