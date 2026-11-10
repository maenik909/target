const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
  const requestDetails = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
    // The IP address of the immediate server connecting to you
    remoteAddress: req.socket.remoteAddress, 
    // Every single HTTP header sent with the request
    headers: req.headers,
    // Query parameters if any
    query: req.query,
  };

  // Inspect it perfectly in your server console
  console.log("=== INCOMING REQUEST DUMP ===");
  console.log(JSON.stringify(requestDetails, null, 2));
  console.log("=============================");

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
