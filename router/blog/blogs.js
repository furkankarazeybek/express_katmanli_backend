const express=require("express")
const router=express.Router()
const blogsController = require('../../controllers/blogs/blogsController')



router.get("/getAll",blogsController.getAll)
router.get("/getById/:blogId",blogsController.getById)
router.post("/create",blogsController.create)


module.exports={
    blogs:router
}


