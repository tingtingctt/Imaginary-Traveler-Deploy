const bcrypt  = require("bcrypt");
const mongoose = require("../config/mongoose");
const SALT_ROUNDS = 10;

const {Schema} = mongoose;
const {Types} = Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    username: {
        type: String,
        unique: false,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    books: {
        type: Array,
        default: []
    },
    entries: {
        type: Array,
        default: []
    },
});

userSchema.pre("save", function(){
    if(this.password.length < 8){
        return Promise.reject(
            new Error("Password must be at least 8 characters!")
        )
    }
    return bcrypt.hash(this.password, SALT_ROUNDS).then(hash=>{
        this.password = hash;
    })
})

userSchema.methods.checkPW = function(password){
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;