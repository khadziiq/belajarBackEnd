const route = require('express').Router()

route.get('/',(req, res)=>{
    res.send("Index Page")
})

const todoRoutes = require('./todo')
route.use('/todos', todoRoutes)


module.exports = route