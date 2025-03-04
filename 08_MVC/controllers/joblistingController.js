//IN the controller we define Actions/Functions
const jobdata =  {};
//later can replace this with DB
jobdata.joblisting = require('../model/joblisting.json');

const getAllJoblistings = (req, res) => {
    res.json(jobdata.joblisting);
}

const createNewJoblisting = (req, res) => {
    res.json({
        "title": req.body.title,
        "company": req.body.company,
        "location": req.body.location,
        "jobdesc": req.body.jobdesc
    });
}


const updateJoblisting = (req, res) => {
    res.json({
        "title": req.body.title,
        "company": req.body.company,
        "location": req.body.location,
        "jobdesc": req.body.jobdesc
    });
}


const deleteJoblisting = (req, res) => {
    res.json({ "id": req.body.id })
}

const getJoblisting =(req, res) => {
    res.json({ "id": req.params.id });
}


module.exports = {
                    getAllJoblistings,
                    createNewJoblisting, 
                    updateJoblisting,
                    deleteJoblisting, 
                    getJoblisting
                }