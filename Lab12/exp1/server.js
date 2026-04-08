const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    users.push(req.body);
    res.json(users);
});

app.put('/users/:id', (req, res) => {
    users[req.params.id] = req.body;
    res.json(users);
});

app.delete('/users/:id', (req, res) => {
    users.splice(req.params.id, 1);
    res.json(users);
});

app.listen(3000);