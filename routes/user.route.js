const express= require('express')
const { addUser, findAllUsers, findSingleUser, updateUser, DeleteUser } = require('../controllers/user.controller')
const router= express.Router()

/*add user*/
router.post('/users',addUser)

/*get all user*/
router.get('/users',findAllUsers)

/*get one user*/
router.get('/user/:id',findSingleUser)

/*update user*/
router.put('/user/:id',updateUser)

/*delete user*/
router.delete('/user/:id',DeleteUser)




module.exports=router