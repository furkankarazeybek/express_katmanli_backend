const usersRouter=require("./user/user").users
const blogsRouter=require("./blog/blogs").blogs

module.exports={
    user:usersRouter,
    blog:blogsRouter
}