const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

class Todo{
    constructor(id, task, status, createdAt, updatedAt){
        this.id = id
        this.task = task
        this.status = status
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    static getTodos(){
        return new Promise((resolve, reject)=>{
            fs.readFile('./database/data.json','utf8',(err, data)=>{
                if(err){
                    reject(err)
                } else {
                    let todos = JSON.parse(data)
                    todos = todos.map(todo=>{
                        const{id, task, status, createdAt, updatedAt} = todo
                        return new Todo(id, task, status, createdAt, updatedAt)
                    })
                    resolve(todos)
                }
            } )
        })
    }
    static createTodo(params){
        return new Promise((resolve, reject)=>{
            this.getTodos()
            .then(result=>{
                let todos = result
                let id = todos[todos.length - 1].id + 1
                const{task, status} = params
                let createdAt = new Date()
                let updatedAt = null

                todos.push(new Todo(id, task, Boolean(status), createdAt, updatedAt))
                this.save(todos)
                resolve(new Todo(id, task, status, createdAt, updatedAt))
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
    static findById(id){
        return new Promise((resolve, reject)=>{
            this.getTodos()
            .then(result=>{
                let todos = result
                todos.forEach(todo => {
                    if (todo.id === id) {
                        resolve(todo)
                    }
                });
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
    static save(todos){
        fs.writeFileSync('./database/data.json', JSON.stringify(todos, null, 3))
    }
}

module.exports = Todo