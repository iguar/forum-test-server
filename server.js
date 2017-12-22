const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// app.use(express.static('public'));
// app.set('views', __dirname + '/view');
// app.set('view engine', 'pug');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "view"));
// app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "public")));



const forum = require('./forum');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/message', forum.getMessages);
app.post('/message', forum.addMessage);

app.listen(3200, () => console.log('App listening on port 3200!'));

module.exports = app;