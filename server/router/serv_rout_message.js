const express = require('express');
const router = express.Router();


const sequelize = require('../models').sequelize;

const {
  Usersinfo,
  Messageinfo,
  Sequelize: { Op }
  } = require('../models');
sequelize.query('SET NAMES utf8;');

router.post('/data', (req, res) => {
  const query = "SELECT * FROM messageinfos where receive = :id UNION SELECT * FROM messageinfos where send = :id ORDER BY date DESC"
  sequelize.query(query, {replacements: {id : req.body.id}})
  .spread(function (results, metadata) {
    res.send(results)
    console.log(results)

  }, function (err) {
    // 쿼리 실행 에러

  });
})

router.post('/user', (req, res) => {
  const query = "SELECT send, date FROM messageinfos WHERE receive = :id UNION SELECT receive, date FROM messageinfos where send = :id ORDER BY date DESC"
  sequelize.query(query, {replacements: {id : req.body.id}})
  .spread(function (results, metadata) {
    res.send(results)
    console.log(results)

  }, function (err) {
    // 쿼리 실행 에러

  });
})

router.post('/mainpage', (req, res) => {
  const query = "SELECT * FROM messageinfos where receive = :id ORDER BY date DESC LIMIT 3"
  sequelize.query(query, {replacements: {id : req.body.id}})
  .spread(function (results, metadata) {
  res.send(results)
  console.log(results)
  }, function (err) {
  // 쿼리 실행 에러
  });
})

router.post('/send', (req, res) => {
  console.log(req.body)
  Usersinfo.findOne({
    where : {user_id : req.body.recieve}
  }).then (result => {
    console.log(result)
    create_massage(req, res,(result == null))
  })
})

function create_massage(req, res, exist) {
  if (exist == false) {
    Messageinfo.create({
      send : req.body.send,
      receive : req.body.recieve,
      text : req.body.text,
      date : req.body.date
    })
    res.send({receive : true})
    console.log("reciever is exist")
  }
  else
  {
    res.send({receive : false})
    console.log("reciever is not exist")
  }
}



module.exports = router;