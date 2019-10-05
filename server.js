
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

app.get('/save-data', (req, res) => {
  const saveData = req.headers['save-data'];
  let imagePathCriteria;
  if( saveData === 'on')
    imagePathCriteria = 'light';
  else
    imagePathCriteria = 'heavy';

  res.status(200).json({imagePathCriteria});
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