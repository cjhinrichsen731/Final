require('colors') 

var config = require('./package'),
    express = require('express'),
    bodyParser = require('body-parser'), 
    path = require('path'), 
    logger = require('morgan')('dev'), 
    fileserver = express.static('public'), 
    mongoose = require('mongoose').connect('mongodb://localhost/'.concat(config.name), ( error ) => {
        if( error ) {
            console.error('ERROR starting mongoose!', error);
            process.exit(128);
        } else {
            console.info('Mongoose connected to MongoDB successfully'.yellow);
        }
    }),
    sessions = require('client-sessions')({ 
        cookieName : config.name, 
        secret: '$T0N#R-n-K@!@$#N!K0V-R!F!#$', 
        requestKey: 'session', 
        duration: (60*60*24 * 1000) * 14, 
        cookie: {
            ephemeral: false,   
            httpOnly: true,     
            secure: false       
        }
    }),
    app = express(), 
    port = process.env.PORT||5446; 


app.use(logger);    
app.use(sessions); 
app.use(fileserver);


app.set('view engine', 'ejs');

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended:true }));

//app.post('/register', req.body.json())

require('./routes')(app); 


app.listen(port, () => {
    console.log('Login Server Started on port:', port.toString().cyan)
});
