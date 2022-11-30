const db = require('../models')
const Userregis = db.userregis
const bcrypt = require('bcrypt')

const createuser = async (req,res) => {
    const hashpassword = await bcrypt.hash(req.body.password , 10)
    const newUser = {
        name:req.body.name,
        email:req.body.email,
        password:hashpassword
    }
    try {
        //creating new user
       

            const saveperson = await Userregis.create(newUser)
            //res.status(201).json(newUser)
            console.log(saveperson)
            return res.render('/')
    } catch (err) {
        console.log(err)
        
    }
}
module.exports = {
    createuser
}