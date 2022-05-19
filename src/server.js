const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

require("./routes/routes.index")(app);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
