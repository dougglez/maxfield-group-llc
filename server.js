const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, '')));
app.listen(8085, () => console.log('Shipping lane 8085 open'));