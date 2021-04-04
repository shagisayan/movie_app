const mongoose = require('mongoose')

mongoose
    .connect('mongodb://shagi_02:Shagi1997@mongodbproject-shard-00-00.f6he2.mongodb.net:27017,mongodbproject-shard-00-01.f6he2.mongodb.net:27017,mongodbproject-shard-00-02.f6he2.mongodb.net:27017/cinema?ssl=true&replicaSet=atlas-dbu18c-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db


//mongodb://shagi_02:<password>@mongodbproject-shard-00-00.f6he2.mongodb.net:27017,mongodbproject-shard-00-01.f6he2.mongodb.net:27017,mongodbproject-shard-00-02.f6he2.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-dbu18c-shard-0&authSource=admin&retryWrites=true&w=majority