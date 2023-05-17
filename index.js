const express = require("express");
const userRoute = require("./src/routes/user.route");

const app = express();

app.use("/soma", userRoute);

// app.get("/", (req, res) => {
//   res.send("Hello Node/Express World!!!");
// });

app.listen(3000);
