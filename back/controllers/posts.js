import Post from '../models/posts.js'

exports.createPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
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