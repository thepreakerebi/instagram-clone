const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = ( req, res, next ) => {
    const { authorization } = req.headers;
    // authorization === Bearer oioioioioio
    if(!authorization) {
        return res.status(401).json({ error: "You must be logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if(err) {
            return res.status(401).json({error: "You must be logged in"});
        }
        const { _id } = payload;
        User.findById(_id)
        .then(userData => {
            req.user = userData;
            next();
        });

    });
}