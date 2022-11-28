import  express  from "express";
const router = express.Router();
import authCtrl from '../controllers/user.js';

router.post('/login',authCtrl.login);
router.post('/signup',authCtrl.signup);

export default router;