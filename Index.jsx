const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs') 
app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') 
app.set('view engine', 'hypatia') 

  
app.get('/pokemon', (req, res) => {
	res.render('template', { title: 'Des', message: 'See All The Pokemon!', content: '(Pokemon!!)' })
  })

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

class MyFirstComponent extends React.Component() {
    return (
      <div style={myStyle}>My First React Component!</div>;
    }
  }

app.get('/', function (req, res) {
    res.send(
        `<a href="http://localhost:3000//pokemon/x"></a>`);
  });

// Tell the app to listen on port 3000
app.listen(port, function() {
    console.log('Listening on port 3000');
   });

