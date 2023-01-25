const express = require("express")
const router = express.Router()
const userController = require('../../controllers/user/userController')
const upload = require('../../middleware/imageUpload')
const auth=require('../../middleware/auth')
const validations=require('../../validations/validations')

router.get("/getAll",[auth],userController.getAll)
router.get("/getById/:userId",userController.getById)

router.put("/updateById/:userId/",[...validations.userValidator.update()], userController.updateById)
router.post("/updateProfilePhoto", [upload.single("photo")], userController.updateProfilePicture)


router.post("/signIn", userController.signIn)


router.post("/findByEmail/",userController.findByEmail)
router.get("/findByName/",userController.findByName)

router.post("/create",[upload.single("photo")],userController.create) 

router.get("/getBlogsById/:userId",userController.getBlogsByUserId)
router.get("/getBlogsByName/:userId", userController.getBlogsByName)


module.exports={
    users:router
}

