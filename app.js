const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const adminRoute = require('./routes/admin')
const fixtureRoute = require('./routes/fixture')
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.set('useCreateIndex', true);

const uri = process.env.DBConnect;
mongoose.connect(uri, { useNewUrlParser: true })
.then(() => {
    console.log('Successfully connected')
})
.catch((err) => {
    console.log(`Couldn't connect ${err}`)
})

//local db setup
// mongoose.connect("mongodb://localhost/league", { useNewUrlParser:true }, function(err){
//     if(err){
//         console.log("can't connet to database " + err)
//         return;
//     }
//     console.log("connection locally");
// }).catch()


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('server started successfully')
    next()
})

app.use('/api/team', adminRoute)
app.use('/api/fixture', fixtureRoute)


module.exports = app;
