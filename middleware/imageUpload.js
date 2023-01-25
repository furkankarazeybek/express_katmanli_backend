const multer = require('multer')
const allowedMimeTypes=["image/png","image/jpg","image/jpeg"]

const storage = multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,process.env.UPLOAD_DIR)

    },
    filename:function(req,file,cb){
        const randomName=`${Date.now()}_${Math.random().toString(36)}_${file.fieldname}_${file.originalname}`
        cb(null,randomName)
    
    }
})

const fileFilter=(req,file,cb) => {

    /* if(file.mimeType=="image/png" || file.mimeType=="image/jpg" || file.mimeType=="image/jpeg") { */


   if(allowedMimeTypes.includes(file.mimetype)) {
        return cb(null,true)

    }
    else{
        return cb(new Error("Desteklenmeyen Dosya Biçimi"),false)
    }
}

const upload=multer({storage:storage,fileFilter:fileFilter,limits:{ filseSize: process.env.MAX_SIZE}})
module.exports = upload