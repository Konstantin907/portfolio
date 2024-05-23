import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-50">
        <ProjectCard
          src="/bank-app-hero.png"
          title="Modern Bank App"
          description="Bank app with credit calculator, i18n and currency exchange"
          url="https://bank-app-hs1l.vercel.app/"
        />
        <ProjectCard
          src="/Threejs.png"
          title="3D Shirts models"
          description="Threejs website for creating your own t-shirt brand, it works for full shirt or just logo with color changes also in a color pallete."
          url= "https://threejs-project-delta.vercel.app/"
        />
        <ProjectCard
          src="/nasa.png"
          title="Nasa clone"
          description="Cloned NASA website with 768px responsivness, with all features from their beautiful website, dropdowns, functionality etc"
          url= "https://nasa-clone-ten.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;