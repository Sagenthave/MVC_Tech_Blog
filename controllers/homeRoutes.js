const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
        include: [
            {
                model: User
                // attributes: []
            },
            {
                model: Comment
                // attributes: []
            }
          ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs)

    res.render('homePage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: []
            },
            {
                model: Comment,
                attributes: []
            }
          ],
    });

    const blog = blogData.get({ plain: true });
    const comments = await Comment.findAll({
      where: {
        blog_id: req.params.id,

      }, include: {
        model: User
      }
    })
    const commentData = comments.map((comment) => comment.get({plain: true}));

    res.render('homePage', {
    blog,
    commentData,user_name: req.session.user_name,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Blog }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get("/logout" , (req,res)=>{
  res.redirect('/');
})
router.get("/home" , (req,res)=>{
  res.redirect('/');
});
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get("/dashboard" , withAuth, async (req,res)=>{
  try {

    const user_id = req.session.user_id;
    const usersData = await Blog.findAll({
      where: {
        user_id
      },
      include: {
        model: User
      }
    })
    const allBlogs = usersData.map((blog) => (blog.get({plain: true})));
    res.render("blogPost", {
      allBlogs, 
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      user_name: req.session.user_name,
    })
  } 
  catch (error) {
    console.log(error)
  }
})
module.exports = router;
