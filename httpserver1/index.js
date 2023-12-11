
const express = require('express');
const port=3000;
const path=require('path');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/A', function (req, res) {
    res.send('Hey,Adithya....wonderful');
  });
/*app.get('/todo',function(req,res){
    res.send(todo.js)
})
*/
app.get('/todo', function (req, res) {
    // Use res.sendFile to send the todo.js file
    res.sendFile(path.join(todo.js, 'path/to/todo.js'));
});

app.listen(port)
