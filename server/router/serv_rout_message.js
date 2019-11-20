const express = require('express');
const router = express.Router();


const sequelize = require('../models').sequelize;

const {
    Messageinfo,
    Sequelize: { Op }
  } = require('../models');
sequelize.query('SET NAMES utf8;');

router.post('/', (req, res) => {
    Messageinfo.findAll({
        where : { [Op.or] : [{send : req.body.id}, {receive: req.body.id}] }
    }).then (result => {
        res.send(result)
        console.log("notice is ")
        console.log(result)
        console.log("END")
    })
})

router.post('/user', (req, res) => {
    const query = "SELECT DISTINCT send FROM messageinfos where receive = :id UNION SELECT DISTINCT receive FROM messageinfos where send = :id"
    sequelize.query(query, {replacements: {id : req.body.id}})
  .spread(function (results, metadata) {
      console.log(results)

    }, function (err) {
      // 쿼리 실행 에러

    });
})


module.exports = router;