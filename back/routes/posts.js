import  express  from "express";
const router = express.Router();
import auth from '../middleware/auth.js';
import postCtrl from '../controllers/posts.js';


router.post('/post', auth, postCtrl.createPost);
router.get('/posts', auth, postCtrl.getPosts);

export default router;