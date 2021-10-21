const router = require('express').Router();
const { fetchProvinces, fetchRegiences } = require('../helpers/emsifa');

router.get('/fetchProvinces', fetchProvinces);
router.get('/fetchRegiences/:provinceId', fetchRegiences);

module.exports = router;