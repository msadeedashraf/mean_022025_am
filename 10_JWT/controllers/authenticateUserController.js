const jwt = require("jsonwebtoken");
require("dotenv").config();
const fspromises = require("fs").promises;
const path = require("path");

const userdata = {
  user: require("../model/registerUser.json"),
  setUser: function (userdata) {
    this.user = userdata;
  },
};

const bcrypt = require("bcrypt");

const handleUserLogin = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }
  const userFound = userdata.user.find((a) => a.username === user);

  if (!userFound)
    //return res.status(401).json ({'message':'Username and password are required.'})
    return res.status(401).json({ message: "Username does not exist." });

  const passwordmatch = await bcrypt.compare(pwd, userFound.password);

  if (passwordmatch) {
    //JWT

    const accessToken = jwt.sign(
      {
        username: userFound,
      },
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "30s",
      }
    );

    const refreshToken = jwt.sign(
      {
        username: userFound,
      },
      process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn: "40s",
      }
    );
    
    const otherUsers = userdata.user.filter((a) => a.username !== userFound.username)
    const currentUser = {...userFound, refreshToken};
    userdata.setUser([...otherUsers, currentUser]);

    await fspromises.writeFile(path.join(__dirname,'..', 'model', 'registerUser.json'),JSON.stringify(userdata.user));
    res.cookie('jwt',refreshToken, {httpOnly:true, maxAge: 24*60*60*1000});
    

    res.json({accessToken})

    //res.json({ success: `${user} successfully logged in!` });
  } else {
    //res.sendStatus(401);
    res.status(401).json({ message: "Username or password does not exist." });
  }
};

module.exports = { handleUserLogin };
