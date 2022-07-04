const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const db = require('./config/database');
const foods = require('./Models/foods');
const beverages = require('./Models/beverages');
const offers = require('./Models/offers')


app.use(express.urlencoded({ extended: false }));// for res.body to work
app.use(express.json());

const cors = require('cors');

app.use(cors());


db.authenticate().then(function () {
    console.log('Database is connected');
}).catch(function (err) {
    console.log(err);
});



// app.get('/:table', function(req, res){
//     let table = req.params.table || 'foods',
//     sql = `SELECT * FROM ${table}`()
// .then(function(result){
//         res.status(200).send(result);
//     }).catch(function(err){
//         res.status(500).send(err);
//     });
// });




// food routes or endpoints
app.get('/', function (req, res) {
    foods.findAll().then(function (result) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

app.post('/', function (req, res) {
    let foods = req.body;
   foods.create(foods).then(function (result) {
        res.redirect('/');
    }).catch(function (err) {
        res.send(err);
    })
});

app.delete('/:id', function (req, res) {
    let id = req.params.id;
    foods.findByPk(id).then((result) => {
        result.destroy().then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err);
        });
    }).catch((err) => {
        res.send(err);
    });
});

// beverages routes or endpoints
app.get('/', function (req, res) {
    beverages.findAll().then(function (result) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});

app.post('/', function (req, res) {
    let beverages = req.body;
    beverages.create(beverages).then(function (result) {
        res.redirect('/');
    }).catch(function (err) {
        res.send(err);
    })
});

app.delete('/:id', function (req, res) {
    let id = req.params.id;
    beverages.findByPk(id).then((result) => {
        result.destroy().then((result) => {
            res.send(result)
        }).catch((err) => {
            res.send(err);
        });
    }).catch((err) => {
        res.send(err);
    });
});





app.listen(4000, function () {
    console.log('Server running on port 4000...');
}); // to create a web server