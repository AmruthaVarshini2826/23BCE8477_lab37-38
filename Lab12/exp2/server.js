const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date());
    next();
};

const second = (req, res, next) => {
    console.log("Second middleware");
    next();
};

app.use(logger);
app.use(second);

app.get('/', (req, res) => {
    res.send("Middleware Working");
});

app.listen(3000);