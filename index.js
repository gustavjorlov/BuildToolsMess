var express = require('express');

var app = express();

app.use(express.static(__dirname + "/dist_demo"));

var port = process.env.PORT || (process.argv[2] || 3000);
app.listen(port, function done(){
    console.log("Listening to port ", port);
});
