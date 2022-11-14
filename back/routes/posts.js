import  express  from "express";
const router = express.Router();
import postCtrl from '../controllers/posts.js';

router.post('/post',postCtrl.createPost);
router.get('/posts',postCtrl.getPosts);

export default router;