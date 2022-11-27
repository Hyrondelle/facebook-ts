const express = require('express');
const router = express.Router();
import authCtrl from '../controllers/user';

router.post('/login',authCtrl.login);
router.post('/signup',authCtrl.signup);

export default router;