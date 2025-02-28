const express = require("express");
const router = express.Router();
const path = require("path");
const jobdata =  {};

//later can replace this with DB
jobdata.joblisting = require('../../data/job_listing.json');

/*
router.route('/')
            .get((req,res)=>{})
            .put((req,res)=>{})
            .delete((req,res)=>{})
            .post((req,res)=>{})
*/


router.route('/')
            .get((req,res)=>{
                res.json(jobdata.joblisting);

            })
            .put((req,res)=>{
                res.json({
                    "title": req.body.title,
	                "company": req.body.company,
    	            "location": req.body.location,
    	            "jobdesc":req.body.jobdesc 
                })


            })
            .delete((req,res)=>{
                res.json({"id": req.body.id})

            })
            .post((req,res)=>{
                res.json({
                    "title": "Software Dev",
	                "company": "TecZila",
    	            "location": 'Hamilton',
    	            "jobdesc":  'This is a test Job Desc'
                })

            })


            router.route('/:id')
            .get((req,res)=>{
                res.json({'id':req.params.id});

            })
            






module.exports = router;


