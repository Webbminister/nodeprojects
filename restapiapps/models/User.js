import mongoose from "mongoose";
const {Schema} = mongoose.Schema;


const userSchema = new Schema({
    username:{
        type: String,
        required: [true, "Please enter username"]
    },
    class: {
        type : Number
    },
    password: {
        type: String,
        required:true
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;