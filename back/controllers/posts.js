import Post from '../models/posts.js';

const createPost = (req, res, next) => {
  const post = new Post({
    message: req.body.message,
    userId:req.body.userId,
    date:req.body.date
  });
  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

const getPosts = (req, res, next) => {
  Post.find().then(
    (posts) => {
      res.status(201).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

const updatePost = (req, res, next) =>{
  Post.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  .catch(error => res.status(400).json({ error }))
}

const deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

export default {createPost,getPosts, updatePost,deletePost}