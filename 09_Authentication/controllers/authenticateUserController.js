const userdata = {

    user : require('../model/registerUser.json'),
    setUser : function (userdata) {this.user =userdata }
    
}

const bcrypt = require('bcrypt');

const handleUserLogin = async (req, res) => {

    const {user, pwd} = req.body;

    if (!user || !pwd  )
        {
            return res.status(400).json ({'message':'Username and password are required.'})
        }
    const userFound = userdata.user.find(a => a.username === user); 
    
    if (!userFound) 
        //return res.status(401).json ({'message':'Username and password are required.'})
        return res.status(401).json({'message':'Username does not exist.'});

    const passwordmatch = await bcrypt.compare(pwd, userFound.password)

    if (passwordmatch)
    {
        //JWT
        res.json({'success':`${user} successfully logged in!`})

    }
    else
    {
        //res.sendStatus(401);
        res.status(401).json({'message':'Username or password does not exist.'});
        
    }


}


module.exports = {handleUserLogin}