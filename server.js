const express = require ('express');
const path = ('path');

const PORT = process.env.PORT || 3001
const app = express ();


//Middleware body parser

app.use(express.json());
app.use (express.urlencoded({extended : true}));

app.use(express.static(public));//this will have all static file

//GET route for homepage
app.get ('/' , (req ,res ) => {
    res.sendFile(path.join(__dirname, '/public/pages/index.html'))

});

//GET route for feedback page

app.get('/feedback', (req , res)  => {
    res.sendFile(path.join(__dirname, '/public/pages/404.html'))

});
 app.listen (PORT , ()  => {
console.log (`App is listening to https://localhost:${PORT}`)

 });



//Create a custom 404.html page for my wild card route to serve.
