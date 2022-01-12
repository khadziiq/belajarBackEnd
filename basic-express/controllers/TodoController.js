class TodoController{
    static getTodos(req, res){
        res.send("Todo Page")
    }
    static infoTodo(req, res){
        res.send("Todo Info Page")
    }
    static createTodo(req, res){
        res.send("Created Todo Page")
    }
}

module.exports = TodoController