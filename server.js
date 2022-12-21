import dotenv from 'dotenv';
dotenv.config();

import express, { static as staticRouter } from 'express';

const PORT = process.env.NODE_PORT || 3000;

const app = express();

app.use(staticRouter(`${__dirname}/dist`));
app.listen(PORT, () => {
  console.log(`\nсервер доступен по адресу http://localhost:${PORT}\n`);
});
