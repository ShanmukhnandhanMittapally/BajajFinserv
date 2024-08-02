const express = require('express');
const router = express.Router();
const { createUser, getOperationCode } = require('../controllers/userController');

router.post('/bfhl', createUser);
router.get('/bfhl', getOperationCode);

module.exports = router;
