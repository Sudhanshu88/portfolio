import mongoose from "mongoose";
import Page from "./model/Page.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function run() {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    const newPage = await new Page({
      pid: "pathuntaken",
      name: "PATHUNTAKEN",
      lang: ["Next.js", "React", "Node.js"],
      description: "A platform for makers, creators, and learners to build skills, showcase work, and get discovered. Build real-world skills with project-based courses across creative and technical fields. From coding to design, video to writing - learn by creating portfolio-worthy projects.",
      demo: "https://pathuntaken.com",
      image: "/assets/projects/pathuntaken.png",
      tech: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS"]
    }).save();
    console.log("Success", newPage);
  } catch(e) {
    console.error("Error", e);
  } finally {
    mongoose.disconnect();
  }
}
run();
