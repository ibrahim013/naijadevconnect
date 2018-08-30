const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Profile Schema
const Profile = require("../../../models/Profile");
const User = require("../../../models/User");

//Load Validator
const validateProfileInput = require("../../../validators/profile");
const validateExperienceInput = require("../../../validators/experience");
const validateEducationInput = require("../../../validators/education");
/**
 * @description GET api/profile/test route
 * @access  public
 *
 * @return json object
 */
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

/**
 * @description GET api/profile route
 * @access  private
 *
 * @return json object
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(Profile => {
        if (!Profile) {
          errors.noprofile = "No profile found";
          return res.status(404).json({ errors });
        }
        return res.json(Profile);
      })
      .catch(err => res.status(404).json(err));
  }
);
/**
 * @description GET api/profile/handle/:handle  get profile by handle route
 * @access  public
 *
 * @return json object
 */
router.get("/handle/:handle", (req, res) => {
  let errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.findprofile = "no profile found";
        return res.status(404).json({ errors });
      }
      return res.json({ profile });
    })
    .catch(err => res.status(400).json(err));
});

/**
 * @description GET api/profile/handle/:user_id  get profile by user_id route
 * @access  public
 *
 * @return json object
 */
router.get("/user/:user_id", (req, res) => {
  let errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.findprofile = "no profile found";
        return res.status(404).json({ errors });
      }
      return res.json({ profile });
    })
    .catch(err => res.status(400).json(err));
});

/**
 * @description GET api/profile/all  get all profile route
 * @access  public
 *
 * @return json object
 */
router.get("/all", (req, res) => {
  let errors = {};
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if (!profiles) {
        errors.findprofile = "There are no profile";
        return res.status(404).json({ errors });
      }
      return res.json({ profiles });
    })
    .catch(err => res.status(500).json(err));
});

/**
 * @description POST api/profile  add profile route
 * @access  private
 *
 * @return json object
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    //Get all fields set;
    const profileFieldSet = {};
    profileFieldSet.user = req.user.id;
    if (req.body.handle) profileFieldSet.handle = req.body.handle;
    if (req.body.company) profileFieldSet.company = req.body.company;
    if (req.body.website) profileFieldSet.website = req.body.website;
    if (req.body.location) profileFieldSet.location = req.body.location;
    if (req.body.status) profileFieldSet.status = req.body.status;
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
          .catch(err => res.status(400).json({ err }));
      });
    });
  }
);

/**
 * @description DELETE api/profile/experience/:exp_id  delete experience from profile route
 * @access  private
 *
 * @return json object
 */
router.delete(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      const removeExp = profile.experience
        .map(item => item.id)
        .indexOf(req.params.body);
      profile.experience.splice(removeExp, 1);
      profile
        .save()
        .then(profile => res.json(profile))
        .catch(err => res.status(400).json(err));
    });
  }
);

/**
 * @description GET api/profile/all  get all profile route
 * @access  public
 *
 * @return json object
 */
router.get("/all", (req, res) => {
  let errors = {};
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if (!profiles) {
        errors.findprofile = "There are no profile";
        return res.status(404).json({ errors });
      }
      return res.json({ profiles });
    })
    .catch(err => res.status(500).json(err));
});

/**
 * @description POST api/profile/education  add education to profile route
 * @access  private
 *
 * @return json object
 */
router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        const newEdu = {
          school: req.body.school,
          degree: req.body.degree,
          fieldofstudy: req.body.fildofstudy,
          from: req.body.from,
          to: req.body.to,
          current: req.body.current,
          discription: req.body.discription
        };
        profile.education.unshift(newEdu);
        profile
          .save()
          .then(profile => res.json(profile))
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  }
);
/**
 * @description DELETE api/profile/education/:edu_id  delete experience from profile route
 * @access  private
 *
 * @return json object
 */
router.delete(
  "/education/:edu_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      const removeEdu = profile.education
        .map(item => item.id)
        .indexOf(req.params.body);
      profile.education.splice(removeEdu, 1);
      profile
        .save()
        .then(profile => res.json(profile))
        .catch(err => res.status(400).json(err));
    });
  }
);

/**
 * @description POST api/profile delete a user and  profile from database
 * @access  private
 *
 * @return json object
 */
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.body.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() => {
        res.json({ success: true });
      });
    });
  }
);
module.exports = router;
