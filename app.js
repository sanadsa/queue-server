const express = require("express");
const app = express();
const port = 3000;
const customerRouter = require("./routes/customerRoutes");
const cors = require("cors");

app.use(cors());
app.listen(port, () =>
  console.log(`Customer server is running at http://localhost:${port}`)
);

app.use("/api/Customers", customerRouter);
