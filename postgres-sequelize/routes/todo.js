const todoRoute = require('express').Router()
const TodoControllers = require('../controllers/TodoController')


todoRoute.get('/', TodoControllers.readTodos)
todoRoute.post('/add', TodoControllers.addTodo)
todoRoute.get('/detail/:id', TodoControllers.findById)
todoRoute.get('/delete/:id', TodoControllers.deleteTodo)
todoRoute.post('/edit/:id', TodoControllers.editTodo)

module.exports = todoRoute