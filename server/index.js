const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const questions = require("./routes/questions");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/questions", questions);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
