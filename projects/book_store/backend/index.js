import express from "express"
import {PORT, mongoDBURL} from "./config.js"
import mongoose from "mongoose";

const app = express();





app.get( '/', (request, response) => {

    console.log(request);
    return response.status(234).send("Welceome to MRN Stack");

}
);




mongoose 
    .connect(mongoDBURL)
    .then(()=>{

        console.log("App connectec to the DB.")
        app.listen(PORT, ()=>{

            console.log(`App is listening to PORT ${PORT}`)
            
            })

    })
    .catch((error)=>{
console.log(error)
    });

