const router = require("express").Router();
const bookRoutes = require("./books");

const googleRoutes = require("./google")


router.use("/google", googleRoutes)

// const { route } = require("./books");
// const authRoutes = require("../auth")
// Book routes
router.use("/books", bookRoutes);
// router.use("/auth", authRoutes);

module.exports = router;
