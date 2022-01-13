const todoRoute = require('express').Router()
const TodoControllers = require('../controllers/TodoController')


todoRoute.get('/', TodoControllers.readTodos)
todoRoute.post('/add', TodoControllers.addTodo)
todoRoute.get('/detail/:id', TodoControllers.findById)

module.exports = todoRoute