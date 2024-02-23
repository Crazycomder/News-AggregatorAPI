const express = require('express');
const app = express();
require('dotenv').config()

const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', users)
app.use('/news', news)


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;