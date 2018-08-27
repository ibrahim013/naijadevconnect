const express = require("express");
const router = express.Router();


/**
 * @description GET api/users/test route
 * @access  private
 * 
 * @return json object
 */
router.get("/test", (req, res) => res.json({ msg: "User works" }));

module.exports = router;