const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()) //strcturing the request body

require("dotenv").config();
app.use(cors());
const dbConfig=require("./config/dbConfig");

const PORT = process.env.PORT || 5000;

const usersRoute = require("./routes/usersRoute");
const itemRoute =require ("./routes/itemsRoutes");


const feedbackRoute=require("./routes/feedbackRoute");

app.use("/api/users" , usersRoute);


app.use("/api/feedback",feedbackRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
