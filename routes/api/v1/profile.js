const express = require("express");
const router = express.Router();

/**
 * @description GET api/profile/test route
 * @access  public
 * 
 * @return json object
 */
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;