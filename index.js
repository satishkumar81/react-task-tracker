const express = require('express');
const jsonServer = require('json-server');

const app = express();

// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults());
server.use('/api', jsonServer.router('db.json'));

server.listen(5000);

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
