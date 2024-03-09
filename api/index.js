const express = require('express')

/* Configurations */

const app = express();

// Create GET request
app.get("/", (req, res) => {
   fetch(`http://localhost:${port}/`)
  .then(response => response.text())
  .then(data => console.log(data));
  })

/* Server */
const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

// Export the Express API
module.exports = app;
