const express = require("express");
const router = express.Router();
const path = require("path");



router.get(`/job_search(.html)?`, (req, res) => {
    res.sendFile(
      path.join(__dirname,  '..',"views",'job-search', "job_search.html")
    );
  });



module.exports = router;
