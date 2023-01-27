const mongoose = require("mongoose");

const conn_str = "mongodb+srv://ysabhishekmishra:123@cluster0.z6nxugj.mongodb.net/ESD?retryWrites=true&w=majority";

mongoose.connect(conn_str, {useNewUrlParser : true, useUnifiedTopology: true})
.then(() => console.log("Connection sucessful"))
.catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
    name  : String,
    age : Number,
    city : String
})

const userObject = new mongoose.model("users", userSchema)

exports.User = userObject;