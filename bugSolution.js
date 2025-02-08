const express = require('express');
const app = express();
app.get('/', (req, res) => {
  getData((data, err) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send({ error: 'Failed to fetch data' });
    } else {
      res.send(data);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function getData(callback) {
  setTimeout(() => {
    const randomError = Math.random() < 0.5 ? new Error('Simulated Error') : null;
    const data = { message: 'Hello from the server!' };
    callback(data, randomError);
  }, 1000);
}