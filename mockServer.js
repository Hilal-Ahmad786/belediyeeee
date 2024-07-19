const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.get('/responses/1', (req, res) => {
  console.log(`[Mock Server] GET /responses/1`);
  res.json({ message: 'Hello from the mock server!' });
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
