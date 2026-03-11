import Page from "@/model/Page";
import initDB from "@/helpers/initDB";
import mongoose from "mongoose";
// import Receiver from "@/model/Receiver";

initDB();
export default async (req, res) => {
  if (req.method === "GET") {
    await getPage(req, res);
  }
};

async function getPage(req, res) {
  const { individualPage } = req.query;
  // console.log(individualPage);
  try {
    let individual;
    if (mongoose.connection.readyState === 1) {
      individual = await Page.findOne({pid : individualPage});
    }

    // Fallback Mock Data if not in DB or no DB connection
    if (!individual) {
      const mockProjects = {
        "pathuntaken": {
          pid: "pathuntaken",
          name: "PATHUNTAKEN",
          lang: ["Next.js", "React", "Node.js"],
          description: "A platform for makers, creators, and learners to build skills, showcase work, and get discovered. Build real-world skills with project-based courses across creative and technical fields. From coding to design, video to writing - learn by creating portfolio-worthy projects.",
          demo: "https://pathuntaken.com",
          image: "/assets/projects/pathuntaken.png",
          tech: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS"]
        },
        "netflix": {
          pid: "netflix",
          name: "Aflix",
          lang: ["React", "Firebase"],
          description: "A Netflix clone built using React and Firebase.",
          demo: "#",
          image: "/assets/projects/netflix.png",
          tech: ["React", "Firebase", "CSS"]
        },
        "elegant": {
          pid: "elegant",
          name: "Elegant",
          lang: ["Next Js"],
          description: "An elegant e-commerce platform.",
          demo: "#",
          image: "/assets/projects/Ecommerce.jfif",
          tech: ["Next Js", "Tailwind CSS"]
        },
        "bookmark": {
          pid: "bookmark",
          name: "Front-end Project",
          lang: ["Next Js"],
          description: "A simple bookmarking tool.",
          demo: "#",
          image: "/assets/projects/frontend.jfif",
          tech: ["Next Js"]
        },
        "score": {
          pid: "score",
          name: "Cricket Score Predictor",
          lang: ["Python"],
          description: "Predict cricket scores using Machine Learning.",
          demo: "#",
          image: "/assets/projects/score.webp",
          tech: ["Python", "Flask", "Scikit-Learn"]
        }
      };
      
      individual = mockProjects[individualPage];
    }
    
    if (individual) {
      res.status(200).json(individual);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
}
