const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/test', (req, res) => {
    db.query("select * from testtable where 1", (err, data) => {
        if(!err) {
            res.send(data[0]);
            console.log(data[0]);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

app.post('/add/data', (req, res) => {
    console.log(req.body)
    res.send({isLoggedin : true})
});

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
});