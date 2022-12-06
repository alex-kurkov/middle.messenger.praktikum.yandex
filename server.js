const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist`));
app.listen(PORT = 3000, () => {
  console.log(`\nсервер доступен по адресу http://localhost:${PORT}\n`)
});
