const bcrypt = require('bcrypt')
const jsonwebtoken = require("jsonwebtoken")
const models = require('../models')

const { userModel } = models

exports.getAllUsers = async function (req, res) {
  const users = await userModel.find({})
  res.status(200).send(users)
}

exports.getUserByID = async function (req, res) {
  const userID = req.params.userID
  try {
    const user = await userModel.findById(userID)
    if (!user) {
      throw 'User not found'
    }
    else {
      res.status(200).json(user)
    }
  }
  catch (error) {
    res.status(400).json({
      error: {
        message: error
      }
    })
  }
}

exports.signup = async function (req, res) {
  try {
    const salt = await bcrypt.genSalt(3);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const emailAddressExists = await userModel.findOne({ emailAddress: req.body.emailAddress })
    if (emailAddressExists) {
      throw "Email address already exists"
    }
    else {
      const newUser = await new userModel({
        ...req.body,
        password: hashedPassword
      }).save()
      res.status(200).json(newUser)
    }
  }
  catch (error) {
    res.status(400).json({
      error: {
        message: error
      }
    })
  }
}

exports.signin = async function (req, res) {
  try {
    //CHECK IF THE user EXISTS
    const user = await userModel.findOne({ email: req.body.email })
    if (user) {
      //CHECK IF THE PASSWORD MATCHES
      const isPasswordMatched = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordMatched) {
        //SIGN THE STUDENT ID AND ROLE WITH JSONWEBTOKEN
        const token = jsonwebtoken.sign(
          { _id: user._id, role: "user" },
          process.env.TOKEN_SECRET
        );
        //CHECK IF THE USER ACCOUNT IS ACTIVE
        const isDisabled = user.isDisabled
        if (!isDisabled) {
          res.status(200).json({ authToken: token, ...user._doc });
        }
        else {
          throw "This account has been deactivated, Please contact an administrator"
        }
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
    console.log(err)
    res.status(400).json({
      error: {
        message: err
      }
    })
  }
}


exports.enable = async function (req, res) {
  //RE-FORMAT THE user ID
  const userID = req.params.userID.replace(/-/g, "/")
  try {
    //CHECK IF THE ACCOUNT EXISTS
    const user = await user.findById(userID)
    if (user) {
      if (user.isDisabled) {
        await userModel.updateOne({ _id: userID }, { isDisabled: false })
        res.status(200).json({})
      }
      else {
        throw "Account already Enabled"
      }
    }
    else {
      throw "This account doesn't exist, please try again"
    }

  }
  catch (error) {
    res.status(400).json({
      error: {
        message: error
      }
    })
  }
}

exports.disable = async function (req, res) {
  //RE-FORMAT THE STUDENT ID
  const userID = req.params.userID.replace(/-/g, "/")
  try {
    //CHECK IF THE ACCOUNT EXISTS
    const user = await userModel.findById(userID)
    if (user) {
      if (!user.isDisabled) {
        await userModel.updateOne({ _id: userID }, { isDisabled: true })
        res.status(200).json({})
      }
      else {
        throw "Account already deactivated"
      }
    }
    else {
      throw "This account doesn't exist, please try again"
    }

  }
  catch (error) {
    res.status(400).json({
      error: {
        message: error
      }
    })
  }
}

exports._delete = async function (req, res) {
  try {
    //RE-FORMAT THE user ID
    const userID = req.params.userID.replace(/-/g, "/")
    await userModel.findByIdAndDelete(userID)
    res.status(200).json({})
  } catch (err) {
    res.status(400).json({
      error: {
        message: err
      }
    })
  }
}

exports.editProfile = async (req, res) => {
  try {
    const userID = req.params.userID.replace(/-/g, "/")
    await user.updateOne(
      { _id: userID },
      { ...req.body }
    )
    res.status(200).json({})
  } catch (error) {
    res.status(400).json({
      error: {
        message: error
      }
    })
  }
}
