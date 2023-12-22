const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    // await mongoose.connect(db);
    await mongoose.connect("mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/test-tech-network", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...!");
  } catch (err) {
    console.log(err.message);
    // exit process with failure;
    process.exit(1);
  }
};

module.exports = connectDB;
