const express = require('express');
const router = express.Router();


const sequelize = require('../models').sequelize;

const {
    Usersinfo,
    Sequelize: { Op }
  } = require('../models');
sequelize.query('SET NAMES utf8;');

router.post('/signin', (req, res) => {
    console.log(req.body)
    let exist = false
    Usersinfo.findOne({
        where : {user_id : req.body.id}
    }).then (result => {
        checkUser(req, res, result)
    })
});

router.post('/signup', (req, res) => {
    console.log(req.body)
    let exist = false
    Usersinfo.findOne({
        where : {user_id : req.body.id}
    }).then (result => {
        console.log(result)
        create_userinfo(req, res,(result != null))
    })
});

function create_userinfo(req, res, exist) {
    console.log(exist)
    if (exist == false) {
        Usersinfo.create({
            user_id : req.body.id,
            user_pw : req.body.pw,
            name : req.body.name,
            grade : "S"
            })
        res.send({isLoggedin : true})
        console.log("create user success")
    }
    else
    {
        res.send({isLoggedin : false})
        console.log("create user fail")
    }
}

function checkUser(req, res, result) {
    if (result!=null) {
        if (req.body.pw == result.user_pw){
            res.send({
                id : result.user_id,
                grade : result.grade,
                name : result.name,
                isLoggedin : true
            })
            console.log("login success")
        }
        else {
            res.send({isLoggedin : false})
            console.log("login fail")
        }
    } else {
        res.send({isLoggedin : false})
        console.log("login fail")
    }

}

module.exports = router;