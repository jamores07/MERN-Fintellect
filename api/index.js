// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//Export Express API
module.exports = app;
