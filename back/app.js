// declaration: declare the necessary libraries
const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();

const authRouter = require('./routes/auth/auth');

// configuration: set up the application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

// the functional parts:
// implement the API part
app.get("/", (req,res) => {
   res.send("youhou");
})


app.use('/auth', authRouter); //where authRouter is imported

/// in case path is not found, return the 'Not Found' 404 code
app.use(function(req, res, next) {
   var  err  =  new  Error('Not Found');
   err.status  =  404;
   next(err);
});


// launch the node server
// changed backend port to 5000
let  server  =  app.listen( process.env.PORT  ||  5000, function(){
   console.log('Listening on port '  +  server.address().port);
});