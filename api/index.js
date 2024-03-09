import express from "express";
import bodyParser from "body-parser";
//import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel");
  })

/* Server */
const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

// Export the Express API
module.exports = app;
