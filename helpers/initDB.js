import mongoose from "mongoose";
function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }
  if (!process.env.Mongo_URI) {
    console.log("Mongo_URI not defined, using mock data");
    return;
  }
  mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error connecting", err);
  });
}
export default initDB;
