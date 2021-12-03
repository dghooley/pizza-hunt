const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('./comments', commentRoutes);
router.use('./pizza', pizzaRoutes);

module.exports = router;
