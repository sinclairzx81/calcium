
var calcium = {

    logging    : require('calcium.logging'),

    storage    : require('calcium.storage'),

    template   : require('calcium.template'),

    web        : require('calcium.web')
};

var app = new calcium.web.App();

// push routers...

var router = new calcium.web.Router();

router.get('/', function(context)
{
    context.response.writeHead(200, {'content-type' : 'text/html'});
        
    context.response.end("end")
    
});

router.post('/formpost', function(context) {
    
    context.response.writeHead(200, {'content-type' : 'text/plain'});

    context.response.end('got a form post');
});

app.routers.push( router );

// start

app.listen(8888);

console.log('server started on port 8888');

