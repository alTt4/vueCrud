require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todosRoutes');

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const cluster = process.env.MONGO_URL;
const db = process.env.MONGO_DB_NAME;

mongoose.connect(
    "mongodb://" + cluster + "/" + db,
    {
        pass: pass,
        user: user,
        // userNewUrlParser:true,
        // userUnifiedTopology:true
    })
    .then(()=>console.log('connexion à MongoDB réussi !'))
    .catch((e)=>console.log(e,'connexion à MongoDB échouée !'));

    const app =express();
    app.use(express.json());
    app.use(cors({
        origin:'http://127.0.0.1:8080'
    }));

    app.use('/ping', (req,res)=> {
        res.status(200).send("PING OK");
    });

    app.use('/api/v1/todos', todosRoutes); 

    //app.use('/api/v1/todos', todosRoutes);
     module.exports = app;