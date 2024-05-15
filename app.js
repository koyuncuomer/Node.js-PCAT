const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (rew, res) => {
  //res.send('Merhaba Dunya');
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
