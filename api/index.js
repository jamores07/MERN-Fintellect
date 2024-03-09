const express = require('express')
const mongoose = require('mongoose')


/* Configurations */
const app = express();

// Create GET request
app.get("/", (req, res) => {
    res.send(`"Express on Vercel and listening on port ${PORT}"`);
  })

/* Server */

const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));

// Export the Express API
module.exports = app;
