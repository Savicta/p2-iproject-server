const router = require('express').Router();
const midtrans = require('../helpers/midtrans');

router.post('/order', midtrans);

module.exports = router;