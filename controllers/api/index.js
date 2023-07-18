const router = require('express').Router();
const userRoutes = require('./');
const blogRoutes = require('./');
const commentRoutes = require('./');


router.use('/user', userRoutes);
router.use('/', blogRoutes);
router.use('/', commentRoutes);


module.exports = router;
