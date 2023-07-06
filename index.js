 const express = require("express");
 const bodyParser = require("body-parser");
 const mongoose = require("mongoose");

 // set up express
 const app = express();

 // Connection String
 const dbURI = "mongodb+srv://zamama:zamama123456@node-js-learning.twldpew.mongodb.net/library?retryWrites=true&w=majority";
 mongoose.connect(dbURI)
  .then((result) => app.listen(process.env.port || 3000))
  .catch((err) => console.log(err));

 app.use(bodyParser.json());

 app.use('/api', require("./routes/api"));

// error handling middlerware
app.use((err, req, res, next)=>{
    res.status(422).send({
        status: false,
        message: err.message,
    });
});


