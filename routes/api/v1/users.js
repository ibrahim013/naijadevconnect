const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../../../config/keys");
const User = require("../../../models/User");

//Load Validator

const validateRegisterInput = require("../../../validators/register");
const validateLoginInput = require("../../../validators/login");
/**
 * @description GET api/users/test route
 * @access  private
 *
 * @return json object
 */
router.get("/test", (req, res) => res.json({ msg: "User works" }));

/**
 * @description POST api/users/register route
 * @access  public
 */
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exist" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm" //Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.status(200).json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/**
 * @description POST api/users/login route
 * @access  public
 */
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) {
          return res
            .status(400)
            .json({ status: "fail", msg: "Username or password is Incorrect" });
        }
        const payload = {
          id: user.id,
          user: user.name,
          avatar: user.avatar
        };
        jwt.sign(
          payload,
          keys.secretorkey,
          { expiresIn: 3600 },
          (err, token) => {
            res.status(200).json({
              status: "success",
              token: "Bearer " + token
            });
          }
        );
      });
    })
    .catch(err => console.log(error));
});

/**
 * @description POST api/users/currentuser route
 * @access  private
 */
router.get(
  "/currentuser",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ msg: "success" });
  }
);
module.exports = router;
