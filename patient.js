const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
var urlParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.get('/', function (request, response) {
    response.sendFile(`${__dirname}/patient-record.html`);
  });
  app.post('/patient', urlParser, function (request, response) {
    var name = request.body.name;
    var age = request.body.age;
    var gender = request.body.gender;
    console.log(`${name}   ${age} ${gender}` );
    var data = {
      name: name,
      age: age,
      gender:gender

    };
    response.end(JSON.stringify(data));
  });
  
  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });
  
