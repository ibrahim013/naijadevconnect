const express = require("express");
const router = express.Router();

/**
 * @description GET api/posts/test route
 * @access  private
 * 
 * @return json object
 */
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;