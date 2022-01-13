class UserController{
    static readUsers(req, res){
        res.json({
            message:"Users Page"
        })
    }
    static addUser(req, res){
        res.json({
            message:"Add Users Page"
        })
    }
    static findById(req, res){
        res.json({
            message:"Find By Id  Page"
        })
    }
}
module.exports = UserController