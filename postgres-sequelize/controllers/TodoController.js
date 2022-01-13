const {todo} = require('../models')

class TodoController{
    static readTodos(req, res){
            todo.findAll()
            .then(todos=>{
                res.json(todos)
            })
            .catch(err =>{
                res.json(err)
            })
    }
    static addTodo(req, res){
        let {task, status} = req.body
        status === "true" ? status = true: status = false
        todo.create({
            task,
            status
        })
        .then(todos=>{
            res.json(todos)
        })
        .catch(err =>{
            res.json(err)
        })
    }
    static findById(req, res){
        const id = +req.params.id
        todo.findByPk(id)
        .then(result=>{
            if (result) {
                res.json(result) 
            } else{
                res.json({
                    message:'Task Not Found'
                })
                
            }
        })
        .catch(err =>{
            res.json(err)
        })
    }
}
module.exports = TodoController