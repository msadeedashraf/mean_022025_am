//IN the controller we define Actions/Functions
/*
const jobdata =  {};
//later can replace this with DB
jobdata.joblisting = require('../model/joblisting.json');
*/
const jobdata = {

    joblisting : require('../model/joblisting.json'),
    setJoblisting : function (jobdata) {this.joblisting =jobdata }
    
}



const getAllJoblistings = (req, res) => {
    res.json(jobdata.joblisting);
}

const createNewJoblisting = (req, res) => {
   
    const newJoblisting = {
        id : jobdata.joblisting[jobdata.joblisting.length - 1].id + 1 ,
        title : req.body.title,
        company: req.body.company,
        location: req.body.location,
        jobdesc : req.body.jobdesc
    }   
    if (!newJoblisting.title || !newJoblisting.jobdesc ||!newJoblisting.company ||!newJoblisting.location )
    {
        return res.status(400).json ({'message':'check if title, company, location or jobdesc is missing'})
    }
    jobdata.setJoblisting([...jobdata.joblisting, newJoblisting] );
    
    res.status(201).json(jobdata.joblisting);
}


const updateJoblisting = (req, res) => {

   

    const myJob = jobdata.joblisting.find(job => job.id === parseInt(req.body.id));

    if (!myJob)
    {
        return res.status(400).json({'message':`Job ID ${req.body.id} not found`})
    }

    if (req.body.title) myJob.title = req.body.title;
    if (req.body.company) myJob.company = req.body.company;
    if (req.body.location) myJob.location = req.body.location;
    if (req.body.jobdesc) myJob.jobdesc = req.body.jobdesc;

    const filteredJoblisting = jobdata.joblisting.filter(job => job.id !== parseInt(req.body.id));

    const unsortedJoblisting = [...filteredJoblisting, myJob] ;

    
    //jobdata.setJoblisting(unsortedJoblisting.sort((x,y)=> x.id > y.id) ? 1 : x.id <y.id ? -1 : 0);
    jobdata.setJoblisting(unsortedJoblisting);
    
    res.json(jobdata.joblisting);
    
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