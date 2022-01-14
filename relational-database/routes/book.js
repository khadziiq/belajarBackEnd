const bookRoute = require('express').Router()
const BookControllers = require('../controllers/BookController')


bookRoute.get('/', BookControllers.get)
bookRoute.get('/add', BookControllers.addPage)
bookRoute.post('/add', BookControllers.add)
bookRoute.get('/detail/:id', BookControllers.findById)
bookRoute.get('/delete/:id', BookControllers.delete)
bookRoute.get('/edit/:id', BookControllers.editPage)
bookRoute.post('/edit/:id', BookControllers.edit)

module.exports = bookRoute