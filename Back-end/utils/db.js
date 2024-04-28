const mongoose = require("mongoose");
const URI = process.env.MDB_URI; //available in .env
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to Db")
    } catch (error) {
        console.log("connection falied with dB");
        process.exit(0);
    }
}

module.exports =  connectDb;