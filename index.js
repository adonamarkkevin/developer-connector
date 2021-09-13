const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
