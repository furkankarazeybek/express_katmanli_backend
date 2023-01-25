const blogService=require('../../service/Blog/blogService')
const httpStatusCodes=require('http-status-codes')
const utils=require('../../utils/utils')

exports.getAll=(req,res,next) => {
    res.send("Blogs")
}

exports.getById=(req,res,next) => {
    res.send("Blogs with id")
}


exports.create = async (req,res,next) => {
    try{
        const result = await blogService.create(req)
        res.json(result).status(httpStatusCodes.StatusCodes.OK);
    }
    catch(error){
        
        console.log(utils.logger.error(error.message));
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(httpStatusCodes.INTERNAL_SERVER_ERROR)

    }
}