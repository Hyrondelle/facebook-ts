import  express  from "express";
const router = express.Router();
import auth from '../middleware/auth.js';
import postCtrl from '../controllers/posts.js';


router.post('/post', postCtrl.createPost);
router.get('/posts', postCtrl.getPosts);
router.put('/updateposts/:id', postCtrl.updatePost);

export default router;