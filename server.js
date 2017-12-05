var express = require('express'),
partials = require('express-partials'),
app = express(),
errorHandlers = require('./middleware/errorHandlers'),
routes = require('./routes');

app.set('view engine', 'ejs');
app.set('view options', {defoultLayout:'layout'});
// app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname + '/static'));
app.use(partials());


app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/blog', routes.blog);
app.get('/services', routes.services);
app.get('/contact', routes.contact);


app.listen(3002)
    console.log('server running port 3002');