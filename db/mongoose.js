const mongoose=require('mongoose')
mongoose.set("strictQuery", false);


exports.connectMongoose=async(host,port,collectionName,timeout) => {
    try{
        await mongoose.connect(`mongodb://${host}:${port}/${collectionName}`,{
            autoIndex:true,
            compressors:"zlib",
            connectTimeoutMS: timeout,
            minPoolSize:10,
            maxPoolSize:100

        })
        console.log("Connected to MongoDB :")

    }
    catch{
        throw new Error("cannot connect mongodb")
    }
}