const express = require('express');
const path = require('path');

const port = 4444;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/search', (req, res)=>{
    res.render('search');
});

app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});