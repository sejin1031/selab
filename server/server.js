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


app.get('/api/test', (req, res) => {
    db.query("select * from usersinfo where 1", (err, data) => {
        if(!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

app.post('/add/data', (req, res) => {
    console.log(req.body)
    console.log(req.body)

      Usersinfo.create({
          user_id : req.body.id,
          user_pw : req.body.pw,
          name : "test",
          grade : "test"
      })
      res.send({isLoggedin : true})
});

app.post('/login/signup', (req, res) => {
    console.log(req.body)

      Usersinfo.create({
          user_id : req.body.id,
          user_pw : req.body.pw,
          name : "test",
          grade : "test"
      })
      res.send({isLoggedin : true})
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});