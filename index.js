const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Cloud Native App Running on server 34.233.125.160 i have developed this 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});