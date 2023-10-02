const express = require('express');
const path=require('path');
const staticPath = path.join(__dirname, "../controllers/blogControllers.js");
const { getBlogStats, searchBlogsEndpoint } = require(staticPath);

const router = express.Router();

router.get('/blog-stats', getBlogStats);
router.get('/blog-search', searchBlogsEndpoint);

module.exports = router;
