const {author} = require('../models')

class AuthorController{
    static get(req, res){
            author.findAll({
                order:[
                    ['id','ASC']
                ]
            })
            .then(authors=>{
                res.render('author.ejs', {authors})
            })
            .catch(err =>{
                res.json(err)
            })
    }
    static addPage(req, res){
        res.render('addAuthor.ejs')
    }
    static add(req, res){
        let {name, age, image} = req.body
        author.create({
            name, age, image
        })
        .then(result=>{
            res.json(result)
            // res.redirect('/authors')
        })
        .catch(err =>{
            res.json(err)
        })
    }
    static findById(req, res){
        const id = +req.params.id
        author.findByPk(id)
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
    static delete(req, res){
        const id = +req.params.id
        author.destroy({ 
            where:{
                id
            }
         })
         .then(result=>{
            if (result === 1) {
                res.redirect('/authors')
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
    static editPage(req, res){
        res.render("editAuthor.ejs")
    }
    static edit(req, res){
        const id = +req.params.id
        let {name, age, image} = req.body
        author.update({
            name, age, image
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
module.exports = AuthorController