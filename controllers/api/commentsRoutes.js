const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE A NEW COMMENT
router.post('/', withAuth, async (req, res) => {
  try {
   
    
    const newComment = await Comment.create({
      comment_content:req.body.comment,
      blog_id:req.body.blogId,
      created_on: new Date(),
      user_id: req.session.user_id,
    });


    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;