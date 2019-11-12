const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const {
    Usersinfo,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');


app.post('/login/signin', (req, res) => {
    console.log(req.body)
    let exist = false
    Usersinfo.findOne({
        where : {user_id : req.body.id}
    }).then (result => {
        checkUser(req, res, result)
    })
});



app.post('/login/signup', (req, res) => {
    console.log(req.body)
    let exist = false
    Usersinfo.findOne({
        where : {user_id : req.body.id}
    }).then (result => {
        console.log(result)
        create_userinfo(req, res,(result != null))
    })
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});


function create_userinfo(req, res, exist) {
    console.log(exist)
    if (exist == false) {
        Usersinfo.create({
            user_id : req.body.id,
            user_pw : req.body.pw,
            name : req.body.name,
            grade : "D"
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
