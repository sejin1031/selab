const express = require('express');
const app = express();
const router_login = require('./router/serv_rout_login')
const router_notice = require('./router/serv_rout_notice')
const router_message = require('./router/serv_rout_message')

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser')

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/login', router_login);
app.use('/notice', router_notice);
app.use('/message', router_message);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});