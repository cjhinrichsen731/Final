'use strict'

var Auth = require('./auth');
var enterRoute = require('./enterRoute');
var expiredRoute = require('./expiredRoute');
var listingRoute = require('./listingRoute');
var updateRoute = require('./updateRoute');

module.exports = (app) => {
/*
app.post('/profileListing', urlencodedParser, (req, res) => {
    res.send(req.body);
    

})
*/

app.post('/listingView', listingRoute.submitListing)

    app.get('/listingView', listingRoute.getListing)


    app.get('/profileHome', (req, res) => {
        res.sendFile('public/profileHome.html', {root: './'})
    })

    app.get('/', (req, res) => { 
    res.sendFile('public/enterHome.html', {root: './'});
    });

    app.get('/expiredRoute', (req, res) => {
        res.render('/expiredRoute.html')
    })

    app.get('/listingRoute', (req, res) => {
    res.render('/listingRoute')
    })

    app.get('/updateRoute', (req, res) => {
    res.render('/updateRoute.html')
    })
    app.get('/login', Auth.render); 
    app.get('/logout', Auth.logout); 

    app.post('/login', Auth.login);
    app.post('/register', Auth.register); 

    
    app.all('/dashboard*', Auth.session);
    app.get('/dashboard', (req, res) => { 
        res.render('dashboard', req.session)
    });
}





/*    

    */