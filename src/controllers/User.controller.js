const UserService = require("../services/User.service");

const createUser = async (req, res) => {
    try {
        return await UserService.createUser(req, res);
      
    } catch (error) {
        res.status(400);
    }
}
const getUsers = async (req, res) => {
    try {
        return await UserService.getUsers(req, res);
       
    } catch (error) {
        res.status(500);
    }
}

const getUserById = async (req, res) => {
    try {
        return await UserService.getUserById(req, res);
    
    } catch (error) {
        res.status(500);
    }
}

const updateUser = async (req, res) => {
    try {
        return  await UserService.updateUser(req, res);
    } catch (error) {
        res.status(500);
    }
}   

const deleteUser = async (req, res) => {
    try {
      return  await UserService.deleteUser(req, res);
      
    } catch (error) {
        res.status(500);
    }
}

const userLogin = async (req, res) => {
    try {
        return await UserService.userLogin(req, res);
    } catch (error) {
        res.status(500);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    userLogin
}   