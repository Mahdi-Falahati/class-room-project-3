require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/route"));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, console.log(`server is running on port ${PORT} 😃`))
  )
  .catch((err) => console.log(err));
