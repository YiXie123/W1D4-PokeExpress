const express = require('express');
const app = express();
const port = 3000;


app.get('/pokemon', function (req, res) {
    res.send(pokemon);
  });

  app.get('/pokemon/:id', function (req, res) {
    res.send(req.params.id);
  });

// Tell the app to listen on port 3000
app.listen(port, function() {
    console.log('Listening on port 3000');
   });