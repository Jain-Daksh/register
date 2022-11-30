const req = require('express/lib/request')
const db = require('../models')
const bcrypt = require('bcrypt')


class UserController{
    static home = (req,res) => {
        res.render('index')
    }
    static registration = (req,res) => {
        res.render('register')
    }
    static login = (req,res) => {
        res.render('login')
    }
}



module.exports =  UserController