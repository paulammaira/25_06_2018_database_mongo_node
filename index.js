const express = require ('express');
const expressMongoDb = require ('express-mongo-db');
const bodyParser = require ('body-parser');
const ObjectId = require('mongodb').ObjectId;

const app = express ();

app.use(expressMongoDb('mongodb://localhost/aula2backend'));
app.use(bodyParser.json());

app.get('/churros', (req, res) =>{
    req.db.collection('sabores').find().toArray((err, data) => {
        if(err){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }

        res.send(data);
    });
});

app.get('/churro/:id', (req, res) =>{
    let query = {
        _id: req.params.id
    };
    req.db.collection('sabores').findOne(query,(err, data) => {
        if(err){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }

        res.send(data);
    });
});

app.get('/bebidas', (req, res) =>{
    req.db.collection('drinks').find().toArray((err, data) => {
        if(err){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }

        res.send(data);
    });
});

app.get('/hamburgers', (req, res) => {
    req.db.collection('hamburgers').find().toArray((err, data) => {
        if(err){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }

        res.send(data);
    });
});









app.post('/churro', (req, res) => {
    req.db.collection('sabores').insert(req.body, (err) => {
        if(err){
            res.statusMessage(500).send('Erro ao acessar o banco de dados');
            return;
        }
        res.send('ok');
    });
});

app.post('/bebida', (req, res) => {
    req.db.collection('drinks').insert(req.body, (err) => {
        if(err){
            res.statusMessage(500).send('Erro ao acessar o banco de dados');
            return;
        }
        res.send('ok');
    });
});

app.post('/hamburger', (req, res) => {
    req.db.collection('hamburgers').insert(req.body, (err) => {
        if(err){
            res.statusMessage(500).send('Erro ao acessar o banco de dados');
            return;
        }
        res.send('ok');
    });
});

app.listen(3000);