const User = require('../models/User.model');
const jwt = require("jsonwebtoken");


const createUser = async (req, res) => {
    try {
        console.log('service', req.body);
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);

    } catch (error) {
        res.status(400)
    }
}
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500)
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500)
    }
}

const updateUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.body.id, req.body);
    } catch (error) {
        res.status(500)
    }
}

const deleteUser = async (req, res) => {
    try {
        
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send('User deleted');
    } catch (error) {
        res.status(500)
        
    }
}

const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.status(404).send('User not found');
        }
        if(user.password === req.body.password){

            console.log('process.env.JWT_SECRET',process.env.JWT_SECRET)
            const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: "1h" } )//);
            res.status(200).send({token:token})

        }else{
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500)
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    userLogin,
}