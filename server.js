const express = require('express');

const app = express();

app.use(express.static('dist/'));

const port = process.env.PORT || 8080;

console.info(`Listening on ${port}`);
app.listen(port);
