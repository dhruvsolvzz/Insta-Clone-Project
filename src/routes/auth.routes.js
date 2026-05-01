// Ye File Authentication se related saari API handle akrti hai

const express = require('express')
const { registerController, loginController, getMeController } = require('../controllers/auth.controller');
const { identifyUserController } = require('../middlewares/auth.middleware');

const authRouter = express.Router();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.post('/get-me', identifyUserController, getMeController);

module.exports = authRouter