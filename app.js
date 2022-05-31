const express = require("express");
const cors = require("cors");
const postRoute = require('./routes/postRoute')
const depositRoute = require('./routes/depositRoute')
require("./src/db/connection");


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(postRoute);
app.use(depositRoute)


app.listen(port, () => {
  console.log("Application is running on port:", port);
});
