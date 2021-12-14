const expres = require('express');
const path = require('path');
const app = express();
const publicPath =path.resolve(__dirname, './public');
app.use(express.publicPath(publicPath));
