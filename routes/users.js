/* jshint esversion:6 */
const express = require('express');
const db = require('../models');
const User = db.user;

const router = express.Router();

router.route('/')
.get((req, res) => {

  return User.findAll()
  .then(usersList => {
    return res.json(usersList);
  });
})
.post((req, res) => {
  let username = req.body.username;

  User.create({ username : username })
  .then(response => {
    return res.json(response);
  })
  .catch(err => {
    // could use something to log this error
    return console.log(err);
  });
});

router.route('/:username')
.get((req, res) => {
  const username = req.params.username;
  console.log('slednfsdlenf', username);
  res.json('user profile and user messages');
});

module.exports = router;