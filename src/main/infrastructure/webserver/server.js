const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const router = require('../../adapters/router')(express.Router());

app.use(bodyParser());

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
