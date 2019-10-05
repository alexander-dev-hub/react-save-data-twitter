
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/datasaver', (req, res) => {
  const saveData = req.headers['data-saver'];
  let imagePath = 'heavy';
  if( saveData === 'true')
    imagePath = 'light';
  else
    imagePath = 'heavy';

  res.header('data-saver', saveData);
  res.json({imagePath});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(`Frontend start on http://localhost:3000`);
  }
);