const authorRoute = require('express').Router()
const AuthorControllers = require('../controllers/AuthorController')


authorRoute.get('/', AuthorControllers.get)
authorRoute.get('/add', AuthorControllers.addPage)
authorRoute.post('/add', AuthorControllers.add)
authorRoute.get('/detail/:id', AuthorControllers.findById)
authorRoute.get('/delete/:id', AuthorControllers.delete)
authorRoute.get('/edit/:id', AuthorControllers.editPage)
authorRoute.post('/edit/:id', AuthorControllers.edit)

module.exports = authorRoute