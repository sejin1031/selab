const express = require('express');
const router = express.Router();


const sequelize = require('../models').sequelize;

const {
  Messageinfo,
  Sequelize: { Op }
  } = require('../models');
sequelize.query('SET NAMES utf8;');

// router.post('/', (req, res) => {
//   Messageinfo.findAll({
//       where : { [Op.or] : [{send : req.body.id}, {receive: req.body.id}] }
//   }).then (result => {
//       res.send(result)
//       console.log("notice is ")
//       console.log(result)
//       console.log("END")
//   })
// })

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
  Messageinfo.findOne({
    where : {user_id : req.body.recive}
  }).then (result => {
    console.log(result)
    create_massage(req, res,(result == null))
  })
})

function create_massage(req, res, exist) {
  if (exist == false) {
    Messageinfo.create({
      send : req.body.send,
      recive : req.body.recive,
      text : req.body.text,
      date : req.body.date
    })
    res.send({recive : true})
    console.log("reciver is exist")
  }
  else
  {
    res.send({recive : false})
    console.log("reciver is not exist")
  }
}



module.exports = router;