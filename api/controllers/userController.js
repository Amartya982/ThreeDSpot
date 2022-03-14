const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jsonwebtoken = require("jsonwebtoken")
const Teacher = require('../models/teacherModel')
const Class = require('../models/classModel')
const fs = require("fs")

exports.getAllTeachers = async function (req, res) {
  const teachers = await Teacher.find({}, "-image")
  res.status(200).json(teachers)
}
exports.getTeacher = async function (req, res) {
  const teacher = await Teacher.findOne({ _id: req.params.id })
  res.status(200).json(teacher)
}
exports.addTeacher = async function (req, res) {
  const salt = await bcrypt.genSalt(3);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
  const newTeacher = await new Teacher({
    ...req.body,
    password: hashedPassword
  }).save()
  if (req.body.class) {
    const isValidClass = mongoose.Types.ObjectId.isValid(req.body.class)
    if (isValidClass) {
      await Class.updateOne(
        { _id: req.body.class },
        { $push: { teachers: newTeacher._id } }
      )
    }
  }
  if (req.body.image) {
    fs.writeFile(
      `${__dirname}/../uploads/images/profile/${newTeacher._id.toString().replace(/\//g, "-")}.jpg`,
      req.body.image,
      'base64',
      (err) => {
        if (err) {
          throw err
        }
      }
    )
  }
  res.status(200).json(newTeacher)
}

exports.login = async function (req, res) {
  try {
    //CHECK IF THE TEACHER EXISTS
    const teacher = await Teacher.findOne({ email: req.body.email }).populate('class')
    if (teacher) {
      //CHECK IF THE PASSWORD MATCHES
      const isPasswordMatched = await bcrypt.compare(
        req.body.password,
        teacher.password
      );
      if (isPasswordMatched) {
        //SIGN THE STUDENT ID AND ROLE WITH JSONWEBTOKEN
        const token = jsonwebtoken.sign(
          { _id: teacher._id, role: "teacher" },
          process.env.TOKEN_SECRET
        );
        const isActive = teacher.status === 'active'
        if (isActive) {
          res.status(200).json({ authToken: token, ...teacher._doc });
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


exports.activate = async function (req, res) {
  //RE-FORMAT THE TEACHER ID
  const teacherID = req.params.teacherID.replace(/-/g, "/")
  try {
    //CHECK IF THE ACCOUNT EXISTS
    const teacher = await Teacher.findById(teacherID)
    if (teacher) {
      if (teacher.status === "inactive") {
        await Teacher.updateOne({ _id: teacherID }, { status: "active" })
        res.status(200).json({})
      }
      else {
        throw "Account already activated"
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

exports.deactivate = async function (req, res) {
  //RE-FORMAT THE STUDENT ID
  const teacherID = req.params.teacherID.replace(/-/g, "/")
  try {
    //CHECK IF THE ACCOUNT EXISTS
    const teacher = await Teacher.findById(teacherID)
    if (teacher) {
      if (teacher.status === "active") {
        await Teacher.updateOne({ _id: teacherID }, { status: "inactive" })
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
    //RE-FORMAT THE TEACHER ID
    const teacherID = req.params.teacherID.replace(/-/g, "/")
    await Teacher.findByIdAndDelete(teacherID)
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
    const teacherID = req.params.teacherID.replace(/-/g, "/")
    await Teacher.updateOne(
      { _id: teacherID },
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