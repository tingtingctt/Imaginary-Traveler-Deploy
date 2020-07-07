const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/imaginary_traveler",
    // process.env.MONGODB_URI ||     "mongodb://traveler:imaginary4@ds143678.mlab.com:43678/heroku_vvhfchhr",

    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
)

module.exports = mongoose;