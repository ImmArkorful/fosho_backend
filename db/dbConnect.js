const User = require("../models/User");
const Machine = require("../models/Machine");
const dbConfig = require("./db.config");
const db = require("./index");

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initialPush();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

const initialPush = () => {
  User.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      try {
        await User.insertMany(db.EITS);
        console.log("Users added successfully");
      } catch (error) {
        console.log("Error with adding users", error);
      }
    }
  });
  Machine.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      try {
        await Machine.insertMany(db.machines);
        console.log("Machines added successfully");
      } catch (error) {
        console.log("Error with adding machines", error);
      }
    }
  });
};
