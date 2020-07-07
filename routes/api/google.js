const router = require("express").Router();
const googleController = require("../../controllers/googleController");
const axios = require("axios");
router.route("/")
.get(googleController.findAll);

router.get("/seed", (req,res)=> (require('../../db/SEEDdb'), res.json("seeded!")))

module.exports = router;