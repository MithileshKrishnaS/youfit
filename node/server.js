const express = require('express');
const cors = require('cors');
var fs = require('fs');
const app = express();
var port = process.env.PORT || 8081;
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));
app.use(cors(
    {
        origin: "*",
    }
))
app.get('/each', function(req, res){
    res.sendFile(__dirname+'/each.json');
});

app.get('/all', function(req, res){
    res.sendFile(__dirname+'/all.json');
});

app.get('/',function(req, res){
    res.send('welcome to home')
})

