var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(path.resolve('/usr/src/app/public')));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
 console.log('listening to Port', app.get('port'));
});