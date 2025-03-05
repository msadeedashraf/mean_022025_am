
const userdata = {

    user : require('../model/registerUser.json'),
    setUser : function (userdata) {this.user =userdata }
    
}


const fs = require('fs');
const path = require('path');
const fspromises = require('fs').promises;
const bcrypt = require('bcrypt');


const handleNewUserCreation = async (req, res) => {

    const {user, pwd} = req.body;

    if (!user || !pwd  )
        {
            return res.status(400).json ({'message':'Username and password are required.'})
        }

    const duplicate = userdata.user.find(a => a.username === user); 
    if (duplicate) return res.sendStatus(409);

    try {

       const hashPassword =  await bcrypt.hash(pwd,9);

        const newUser = 
                    {
                        "username" : user,
                        "password" : hashPassword
                    };

    userdata.setUser([...userdata.user, newUser]);

    await fspromises.writeFile(
                                path.join(__dirname, '..', 'model', 'registerUser.json'),
                                JSON.stringify(userdata.user)   
                                );

console.log(userdata.user);
res.status(201).json({'success':`${user} has been created!`})

    }
    catch (err)
    {
        res.status(500).json ({'message':err.message}); 

    }



};


module.exports = {handleNewUserCreation}