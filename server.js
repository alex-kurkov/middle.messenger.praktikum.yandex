/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const distDirectory = path.resolve(__dirname, 'dist');

const PORT = process.env.NODE_PORT || 3000;

const app = express();

app.use(express.static(distDirectory));

app.get('*', (req, res) => {
  const indexHTML = fs.readFileSync(
    path.resolve(distDirectory, 'index.html'),
    {
      encoding: 'utf8',
    }
  );

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});


app.listen(PORT, () => {
  console.log(`\nсервер доступен по адресу http://localhost:${PORT}\n`);
});
