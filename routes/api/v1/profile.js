const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Profile Schema
const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

/**
 * @description GET api/profile/test route
 * @access  public
 *
 * @return json object
 */
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

/**
 * @description GET api/profile route
 * @access  Private
 *
 * @return json object
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let errors = {};
    Profile.findOne({ user: req.user.id })
      .then(Profile => {
        if (!Profile) {
          errors.noprofile = "No profile found";
          return res.status(404).json({ errors });
        }
        return res.json(Profile);
      })
      .catch(err => res.status(404).json({ err }));
  }
);

/**
 * @description POST api/profile  add profile route
 * @access  Private
 *
 * @return json object
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Get all fields set;
    const profileFieldSet = {};
    profileFieldSet.user = req.user.id;
    if (req.body.handle) profileFieldSet.handle = req.body.handle;
    if (req.body.company) profileFieldSet.company = req.body.company;
    if (req.body.website) profileFieldSet.website = req.body.website;
    if (req.body.location) profileFieldSet.location = req.body.location;
    if (req.body.statue) profileFieldSet.statue = req.body.statue;
    if (req.body.bio) profileFieldSet.bio = req.body.bio;
    if (req.body.githubusername)
      profileFieldSet.githubusername = req.body.githubusername;

    //skills
    if (typeof req.body.skills !== "undefined") {
      profileFieldSet.skills = req.body.skills.split(",");
    }
    //social media
    profileFieldSet.social = {};
    if (req.body.youtube) profileFieldSet.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFieldSet.social.twitter = req.body.twitter;
    if (req.body.instagram)
      profileFieldSet.social.instagram = req.body.instagram;
    if (req.body.linkedin) profileFieldSet.social.linkedin = req.body.linkedin;
    if (req.body.facebook) profileFieldSet.social.facebook = req.body.facebook;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFieldSet },
          { new: true }
        )
          .then(profile => {
            return res.json({ profile });
          })
          .catch(err => res.status(400).json(err));
      }
      Profile.findOne({ handle: req.body.handle }).then(profile => {
        if (profile) {
          errors.hande = "This handle already exist";
          res.status(400).json({ errors });
        }
        new Profile(profileFieldSet)
          .save()
          .then(profile => res.json({ profile }))
          .catch(err => res.status(400).json({error}));
      });
    });
  }
);
module.exports = router;
