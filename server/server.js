if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");



// //routes
// const testRoutes = require("./routes/testRoutes");

const app = express();
app.use(express.json());


// app.use("/api/test", testRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
