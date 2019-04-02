const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/es5-bundled'));

app.get('*', function (req, res) {
  res.sendFile(__dirname+'/public/es5-bundled/index.html');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
