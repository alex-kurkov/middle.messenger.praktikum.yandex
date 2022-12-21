require('dotenv').config();
const express = require('express');

const PORT = process.env.NODE_PORT || 3000;

const app = express();

app.use(express.static(`${__dirname}/dist`));
app.listen(PORT, () => {
  console.log(`\nсервер доступен по адресу http://localhost:${PORT}\n`);
});
