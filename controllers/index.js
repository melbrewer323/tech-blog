const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require("./api/user-routes");
const blogRoutes = require("./api/blog-routes");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use("/api/users", userRoutes);
router.use("/api/blogs", blogRoutes);

module.exports = router;
