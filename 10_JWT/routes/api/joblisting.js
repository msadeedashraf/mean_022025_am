const express = require("express");
const router = express.Router();
const path = require("path");
const joblistingController = require('../../controllers/joblistingController') ;
const verifyJWT = require('../../middleware/verifyJWT');

/*
router.route('/')
            .get((req,res)=>{})
            .put((req,res)=>{})
            .delete((req,res)=>{})
            .post((req,res)=>{})
*/

router.route('/')
    .get(verifyJWT,joblistingController.getAllJoblistings)//To test JWT (verifyJWT) on get route only
    //.get(joblistingController.getAllJoblistings)
    .post(joblistingController.createNewJoblisting)
    .put(joblistingController.updateJoblisting)
    .delete(joblistingController.deleteJoblisting);

router.route('/:id')
    .get(joblistingController.getJoblisting);


module.exports = router;


