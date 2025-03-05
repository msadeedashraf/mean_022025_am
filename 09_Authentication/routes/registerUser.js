const express = require("express");
const router = express.Router();
const registerUserController = require('../controllers/registerUserController');

router.post('/', registerUserController.handleNewUserCreation );

module.exports = router;