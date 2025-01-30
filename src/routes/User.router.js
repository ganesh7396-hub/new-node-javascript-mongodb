const express =require('express');
const router = express.Router();
const user_controller = require('../controllers/User.controller');
const authenticate = require('../middlewares/auth.middleware');


router.post('/addUser',user_controller.createUser);
router.get('/getUsers',authenticate,user_controller.getUsers);
router.post('/userLogin',user_controller.userLogin);
router.get('/getUserById/:id',user_controller.getUserById);
router.post('/updateUser',user_controller.updateUser);
router.delete('/deleteUser/:id',user_controller.deleteUser);


module.exports = router;