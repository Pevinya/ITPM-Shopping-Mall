const express = require('express');
const app = express();
require("dotenv").config();
const dbConfig=require("./config/dbConfig");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
