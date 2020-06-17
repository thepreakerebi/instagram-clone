const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// user sign up logic
exports.addUser = (req, res, next) => {
    const { name, email, password } = req.body; 
    if( !email || !password || !name ) {
        return res.status(422).json({error:"please add all the fields"});
    }
    User.findOne({ email })
    .then(( savedUser ) => {
        if( savedUser ) {
            return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash( password, 12 )
        .then(hashedpassword=>{
                const user = new User({
                    name,
                    email,
                    password:hashedpassword
                });
        
                user.save()
                .then(user=>{
                    res.status(200).json({message:"saved successfully"});
                })
                .catch(err=>{
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        });
        
    })
    .catch(err=>{
        console.log(err);
    });

};

// user login logic
exports.loginUser = ( req, res, next ) => {
    const { email, password } = req.body;
    if( !email || !password ) {
        return res.status(422).json({error: "Please add email or password"});
    } else {
        User.findOne({ email })
        .then(savedUser => {
            if(!savedUser) {
                return res.status(422).json({error: "Invalid email or password"});
            } else {
                bcrypt.compare( password, savedUser.password )
                .then(doMatch => {
                    if(doMatch) {
                        const token = jwt.sign( { _id: savedUser._id }, process.env.JWT_SECRET );
                        return res.status(200).json({
                            token,
                            message: "Login successfully"
                        });
                    } else {
                        return res.status(422).json({error: "Invalid email or password"});
                    }
                })
                .catch(err => {
                    console.log(err);
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
};