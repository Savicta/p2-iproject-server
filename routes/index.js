const router = require('express').Router();
const usersRouter = require('./usersRouter');
const animalsRouter = require('./animalsRouter');
const authentication = require('../middlewares/authentication');
const emsifa = require('./emsifaRouter');
const midtrans = require('./midtransRouter');

router.use(emsifa);
router.use(usersRouter);
router.use(authentication);
router.use(animalsRouter);
router.use(midtrans);

module.exports = router;