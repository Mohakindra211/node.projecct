const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiDoc = require("apidoc");

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/api", require("./routes"));

// generate API documentation
apiDoc.create({
  src: "routes/",
  dest: "apidoc/",
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
