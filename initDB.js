const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        var uri = `mongodb://localhost:27017/testDB`
        await mongoose.connect(uri, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        }, (err => {
            if(err) {
                console.log("Connection to the Database is failed!");
                console.log(err);
            }
        }))
        console.log("Database connection is successful.");
    }
    catch(error){
        console.log("Some error occcured !");
        console.log(error);
    }
}

module.exports = connectDB;