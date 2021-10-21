const router = require('express').Router();
const usersRouter = require('./usersRouter');
const animalsRouter = require('./animalsRouter');
const authentication = require('../middlewares/authentication');
const emsifa = require('./emsifaRouter');

router.use(emsifa);
router.use(usersRouter);
router.use(authentication);
router.use(animalsRouter);

module.exports = router;