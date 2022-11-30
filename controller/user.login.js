const db = require('../models')
const Userregis = db.userregis
const bcrypt = require('bcrypt')

const verifyuser = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await Userregis.findOne({ where: { email } })
    Userregis.findOne({ where: { email } }).then(data => {
      console.log()
    });

    if (result != null) {
      const isMatch = await bcrypt.compare(password, result.password)
      if (result.email == email && isMatch) {
        res.send(`<h1>dashboard  hi</h1>`)
      } else {
        res.send("<h1>email or password not vaild</h1>")
      }
      res.send("<h1>hi</h1>")
    } else {
      res.send("<h1>you are not registered user</h1>")
    }


  } catch (error) {
    console.log(error)
  }

}
module.exports = {
  verifyuser
}