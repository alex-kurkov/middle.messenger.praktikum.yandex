require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const distDirectory = path.resolve(__dirname, 'dist');

const PORT = process.env.NODE_PORT || 3000;

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 2,
  message: 'Слишком частые запросы либо запросы поступают более чем с 2 ip',
  standardHeaders: true,
  legacyHeaders: false,
  skipFailedRequests: true,
});
const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      'connect-src': ['wss://ya-praktikum.tech', 'https://ya-praktikum.tech'],
      'style-src': ["'self'", 'fonts.googleapis.com', "'unsafe-inline'"],
      'object-src': ["'self'"],
      'img-src': ["'self'", 'https://ya-praktikum.tech'],
    },
  })
);

app.use(express.static(distDirectory));

app.get('*', limiter, (req, res) => {
  const indexHTML = fs.readFileSync(path.resolve(distDirectory, 'index.html'), {
    encoding: 'utf8',
  });

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});

app.listen(PORT, () => {
  console.log(`\nсервер доступен по адресу http://localhost:${PORT}\n`);
});
