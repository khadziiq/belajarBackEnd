const userRoute = require('express').Router()
const UserControllers = require('../controllers/UserController')


userRoute.get('/', UserControllers.readUsers)
userRoute.post('/add', UserControllers.addUser)
userRoute.get('/detail/:id', UserControllers.findById)

module.exports = userRoute