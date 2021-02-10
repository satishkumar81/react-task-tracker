const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'build')));
app.use('/api', jsonServer.router('db.json'));

app.get('/', (req, res) => {
  //const name = process.env.NAME || 'World';
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  //res.send(`Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Application: listening on port ${port}`);
});
