"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    //title: "Telegram Guide Bot",
    description: "Developed a telegram bot that provided with walking and metro routes to reach all of the restaurants in Barcelona.",
    image: "/images/projects/telegram_bot.png",
    tag: ["All" , "Data Science"],
    gitUrl: "https://github.com/MarcCG0/MetroNyam-AP2",
  },
  {
    id: 2,
    //title: "Job Scraper",
    description: "Developed a jobboard scraper that allows a fast integration of new jobboards and provides a way to visualize the scraped jobs via streamlit.",
    image: "/images/projects/job_scraper.png",
    tag: ["All" , "Software Engineering"],
    gitUrl: "https://github.com/MarcCG0/jobboard-scraper",
  },
  {
    id: 3,
    //title: "Car manufacturing optimizations",
    description: "Developed a series of optimization algorithms including backtracking, greedy and metaheuristics approaches to optimize the production in car factories.",
    image: "/images/projects/factory-optimization.png",
    tag: ["All" , "Data Science"],
    gitUrl: "https://github.com/MarcCG0/factory-optimization",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software Engineering"
          isSelected={tag === "Software Engineering"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
