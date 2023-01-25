const Blog = require('../../models/Blog/Blog')
const utils=require('../../utils/utils')
const blogDal= require('../../dal/Blog/blogDal')
const dtos= require('../../dto/dtos')
const { validationResult } = require("express-validator")
const userDal = require('../../dal/User/userDal')



const blogService = {

    
    async create(request) {

        const { text, userId} = request.body
        const blog = new Blog({
           date: new Date(),
           text,
           userId,
           fav_count:0,
           file:""
        })

        console.log("blog",blog)

        dtos.baseResponse.data = await blogDal.create(blog)
        const result = await userDal.findById(userId)
        result.blogs.push(blog)
        await result.save()
        dtos.baseResponse.message = "Blog başarıyla oluşturuldu",
        dtos.baseResponse.statusCode = 10002
        return dtos.baseResponse



       /*  console.log("res",result)

        console.log(await userDal.findById(userId)) */
    
    }
}
module.exports = blogService