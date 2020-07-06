const express = require('express');
const app = express();
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 4000);

//middlweres cors
app.use(cors());
app.use(express.json()); //El servidor entiende formato json y strings


//routes  (rutas del servidor)
//Se podifican las rutas para usar otros métodos como push, delay
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;