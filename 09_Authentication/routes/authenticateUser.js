const express = require("express");
const router = express.Router();
const authenticateUserController = require('../controllers/authenticateUserController');

router.post('/', authenticateUserController.handleUserLogin );

module.exports = router;