const {book, author} = require('../models')

class BookController{
    static get(req, res){
            book.findAll({
                order:[
                    ['id','ASC']
                ],
                include:[
                    author
                ]
            })
            .then(books=>{
                res.render('book.ejs', {books})
            })
            .catch(err =>{
                res.json(err)
            })
    }
    static addPage(req, res){
        res.render('addBook.ejs')
    }
    static add(req, res){
        let {title, genre, page, price, image, authorId} = req.body
        book.create({
            title, genre, page, price, image, authorId
        })
        .then(result=>{
            res.json(result)
            // res.redirect('/books')
        })
        .catch(err =>{
            res.json(err)
        })
    }
    static findById(req, res){
        const id = +req.params.id
        book.findByPk(id)
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
        book.destroy({ 
            where:{
                id
            }
         })
         .then(result=>{
            if (result === 1) {
                res.redirect('/books')
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
        res.render("editBook.ejs")
    }
    static edit(req, res){
        const id = +req.params.id
        let {title, genre, page, price, image, authorId} = req.body
        book.update({
            title, genre, page, price, image, authorId
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
module.exports = BookController