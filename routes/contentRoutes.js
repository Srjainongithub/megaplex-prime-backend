// backend/routes/contentRoutes.js

const express = require('express');
const { getContent, updateContent } = require('../controllers/contentController');
const router = express.Router();

router.get('/', getContent);
router.put('/', updateContent);

module.exports = router;