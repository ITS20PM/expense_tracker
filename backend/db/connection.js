const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.ATLAS_URL)
    .then(db => {
        console.log("Database connected");
        return db;
    }).catch(err => {
        console.log("Connection Error");
    });

module.exports = connection;