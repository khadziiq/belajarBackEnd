const {todo} = require('../models')

class TodoController{
    static readTodos(req, res){
            todo.findAll({
                order:[
                    ['id','ASC']
                ]
            })
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
    static deleteTodo(req, res){
        const id = +req.params.id
        todo.destroy({ 
            where:{
                id
            }
         })
         .then(result=>{
            if (result === 1) {
                res.json({
                    message:`id ${id} has been successfully deleted`
                }) 
            } else{
                res.json({
                    message:`The id ${id} not exist`
                })
                
            }
        })
        .catch(err =>{
            res.json(err)
        })
    }
    static editTodo(req, res){
        const id = +req.params.id
        let {task, status} = req.body
        status === "true" ? status = true: status = false
        todo.update({
            task, status
        }, {
            where:{
                id
            }
        })
        .then(result=>{
            if (result[0]===1) {
                res.json({
                    message:`Id ${id} has been updated`
                })      
            }else {
                res.json({
                    message:`Id ${id} has not updated`
                })
            }
        })
        .catch(err =>{
            res.json(err)
        })
    }
}
module.exports = TodoController