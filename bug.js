const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronously fetching data from a database or external service
  getData((data) => {
    // Sending the data as the response
    res.send(data);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Function to simulate asynchronous data fetching
function getData(callback) {
  setTimeout(() => {
    // Simulating potential errors
    // const randomError = Math.random() < 0.5 ? new Error('Simulated Error') : null;
    const data = { message: 'Hello from the server!' };
    callback(data); // Sending the data back
  }, 1000);
}