const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const { ppid } = require("process");
const app = express();
const cors = require("cors")
app.use(cors())

// connect database
connectDB();

// init middleware
app.use(express.json()); //body parser

// app.get("/", (req, res) => res.send("API running"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

app.use(express.static(path.join(__dirname, "./build")));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get("*", (req, res) => {
  const file = path.join(__dirname, "./build/index.html");
  res.sendFile(file);
});