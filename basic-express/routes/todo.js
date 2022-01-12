const todoRoute = require('express').Router()
const TodoControllers = require('../controllers/TodoController')

todoRoute.get('/',  TodoControllers.getTodos) 
todoRoute.get('/info', TodoControllers.infoTodo)
todoRoute.get('/create', TodoControllers.createTodo)

module.exports = todoRoute