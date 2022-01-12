const Todo = require('../models/Todo')

class TodoController{
    static getTodos(req, res){
        // res.send("Todo Page")
        Todo.getTodos()
        .then(todos=>{
            res.send(todos)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static infoTodo(req, res){
        // res.send("Todo Info Page")
        const id = +req.params.id
        Todo.findById(id)
        .then(result=>{
            console.log(result)
            res.send(result)
        })
        .catch(err=> res.send(err))
    }
    static createTodo(req, res){ 
        // res.send("Created Todo Page")
        Todo.createTodo(req.body)
        .then(result=>{
            console.log(result)
            res.send(result)
        })
        .catch(err=> res.send(err))
    }
}

module.exports = TodoController