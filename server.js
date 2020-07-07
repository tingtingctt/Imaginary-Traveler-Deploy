// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const compression = require('compression');
const routes = require("./routes");
require("./config/mongoose");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;


// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(compression({ threshold:0, filter: shouldCompress }))
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret: "books", saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session())

//wtf is this?
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}else{app.use(express.static("public"))};

require('./routes/auth')(app);
app.use(routes);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});


