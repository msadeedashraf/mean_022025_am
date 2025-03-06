const express = require("express");
const router = express.Router();
const path = require("path");







router.get(`^/$|/index(.html)?`, (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', "views", "index.html")
  );
});
router.get(`/contact(.html)?`, (req, res) => {
    res.sendFile(
      path.join(__dirname,  '..',"views", "contact.html")
    );
  });

  router.get(`/privacy(.html)?`, (req, res) => {
    res.sendFile(
      path.join(__dirname,  '..',"views", "privacy.html")
    );
  });

  router.get(`/job_listing(.html)?`, (req, res) => {
    res.sendFile(
      path.join(__dirname,  '..',"views", "job_listing.html")
    );
  });

  router.get(`/terms(.html)?`, (req, res) => {
    res.sendFile(
      path.join(__dirname,  '..',"views", "terms.html")
    );
  });


  router.get(`/job_search(.html)?`, (req, res) => {
    res.sendFile(
      path.join(__dirname,  '..',"views",'job-search', "job_search.html")
    );
  });



module.exports = router;
