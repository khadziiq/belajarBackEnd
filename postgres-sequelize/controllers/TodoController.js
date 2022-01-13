class TodoController{
    static readTodos(req, res){
        res.json({
            message:"Todos Page"
        })
    }
    static addTodo(req, res){
        res.json({
            message:"Add Todos Page"
        })
    }
    static findById(req, res){
        res.json({
            message:"Find By Id  Page"
        })
    }
}
module.exports = TodoController