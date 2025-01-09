const express = require("express"),
  app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");

// Mongoose Connection
const connectDB = require("./db/mongo.js");
connectDB();
// Checking the server 
app.get("/", (req, res) => {
  res.send("Everything is alright");
});

// Cross Origin Policy
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));


const postRoutes=require("./routes/postRoutes.js")
app.use("/",postRoutes);


// Listening the server
app.listen(process.env.PORT, () => {
  console.log(`I listened something at PORT ${process.env.PORT}`);
});
