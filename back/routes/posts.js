const express = require('express');
const router = express.Router();
import postCtrl from '../controllers/posts.js';

router.post('/post',postCtrl.createPost);

export default router;