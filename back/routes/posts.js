import  express  from "express";
const router = express.Router();
import multer from '../middleware/multer-config';
import postCtrl from '../controllers/posts.js';


router.post('/post',multer, postCtrl.createPost);
router.get('/posts', postCtrl.getPosts);
router.put('/updateposts/:id', postCtrl.updatePost);
router.delete('/delete/:id', postCtrl.deletePost);

export default router;