//Cross Origin Resource Sharing
const myWhiteList = ['https://www.teczila.com','https://www.google.com','http://127.0.0.1:5500','http://localhost:3800']

const corsOptions = {
  origin: (origin, callback) => {
      if (myWhiteList.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  optionsSuccessStatus: 200
}


module.exports = corsOptions;
