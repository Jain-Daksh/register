const express = require('express')
const router = express.Router()


module.exports = router

module.exports = app => {
  const Usercontroller = require('../controller/user.controller')
  const { createuser } = require('../controller/user.register')
  const { verifyuser } = require('../controller/user.login')
  router.get('/', Usercontroller.home)
  router.get('/register', Usercontroller.registration)
  router.get('/login', Usercontroller.login)
  router.post('/registration', createuser)
  router.post('/login', verifyuser)
  app.use('/', router);
};