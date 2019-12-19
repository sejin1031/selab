const express = require('express');
const router = express.Router();


const sequelize = require('../models').sequelize;

const {
    Noticeinfo,
    Sequelize: { Op }
  } = require('../models');
sequelize.query('SET NAMES utf8;');

router.get('/', (req, res) => {
    Noticeinfo.findAll().then (result => {
        res.send(result)
        console.log("notice is ")
        console.log(result)
        console.log("END")
    })
})

router.post('/save', (req, res) => {
    Noticeinfo.create({
        title : req.body.title,
        writer : req.body.writer,
        content :req.body.content,
        date : req.body.date
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
    console.log(req.body.date);
})

module.exports = router;

router.post('/delete', (req, res) => {
    Noticeinfo.destroy({
        where : {id : req.body.id}
    })
    .then( result => {
        console.log(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
})