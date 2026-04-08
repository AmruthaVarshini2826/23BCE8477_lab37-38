const express = require('express');
const app = express();

const logger = require('./middleware');
require('./db');

const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Server Running");
});

app.listen(3000);
