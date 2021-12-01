const router = require('express').Router();
// import all of the API routes from /api/index.js (no need for index.js through since it's implied)
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// add previx of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
