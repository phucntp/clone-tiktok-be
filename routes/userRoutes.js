const express = require("express");
const { handleRegister } = require("../controllers/account/registerController");
const { handleLogin } = require("../controllers/account/authController");
const {
  handleRefreshToken
} = require("../controllers/account/refreshTokenController");
const { handleLogout } = require("../controllers/account/logoutController.js");
const {
  handleForgotPassword
} = require("../controllers/account/forgotController");
const {
  handleGetAll,
  handleGetUser,
  handleFollowing
} = require("../controllers/user/userController");

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/refresh-token", handleRefreshToken);
router.get("/logout", handleLogout);
router.post("/forgot-password", handleForgotPassword);
router.post("/following", handleFollowing);
router.get("/all", handleGetAll);
router.get("/:username", handleGetUser);

module.exports = router;
