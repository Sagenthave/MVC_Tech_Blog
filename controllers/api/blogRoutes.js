const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE A NEW BLOG POST
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Blog.create({
      blog_title: req.body.title,
      blog_content: req.body.description,
      created_on: new Date(),
      user_id: req.session.user_id,
    })
    res.status(200).json(newPost)
  } catch (err) {
    console.log(err)
  }
});

// UPDATE EXISTING BLOG POST
router.put('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.update(req.body, {
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
      });
      res.status(200).json(blogData);
    } catch (error) {
      res.status(400).json(error);
    }
  });

// DELETE EXISTING BLOG POST
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          // user_id: req.session.user_id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;