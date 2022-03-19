const bcrypt = require('bcrypt')
const jsonwebtoken = require("jsonwebtoken")
const models = require('../models')

const { adminModel } = models

exports.getAll = async function (req, res) {
  const admins = await adminModel.find({})
  res.status(200).json(admins)
}
exports.getByID = async function (req, res) {
  const adminID = req.params.adminID
  res.send(adminID)
}
exports.create = async function (req, res) {
  const salt = await bcrypt.genSalt(3);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const emailAddressExists = await userModel.findOne({ emailAddress: req.body.emailAddress })
    if (!emailAddressExists) {
      const newAdmin = await new adminModel({
        ...req.body,
        password: hashedPassword
      }).save()
      res.status(200).json(newAdmin)
    }
    else {
      throw "Email address already exists"
    }
  }
  catch (errror) {
    res.status(400).json({
      error: {
        message: error
      }
    })
  }
}

exports.signin = async function (req, res) {
  try {
    //CHECK IF THE ADMIN EXISTS
    const admin = await adminModel.findOne({ email: req.body.email }).populate('class')
    if (admin) {
      //CHECK IF THE PASSWORD MATCHES
      const isPasswordMatched = await bcrypt.compare(
        req.body.password,
        admin.password
      );
      if (isPasswordMatched) {
        //SIGN THE ADMIN ID AND ROLE WITH JSONWEBTOKEN
        const token = jsonwebtoken.sign(
          { _id: admin._id, role: admin.role },
          process.env.TOKEN_SECRET
        );
        res.status(200).json({ authToken: token, ...admin._doc });
      }
      else {
        //THROW ERROR FOR INCORRECT PASSWORD
        throw "Invalid Email or Password"
      }
    }
    else {
      //THROW ERROR FOR INVALID EMAIL ADDRESS
      throw "Invalid Email or Password"
    }

  }
  catch (err) {
    res.status(400).json({
      error: {
        message: err
      }
    })
  }
}