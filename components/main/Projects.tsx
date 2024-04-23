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
          src="/spotify-clone.png"
          title="Spotify Clone Website"
          description="Web UI of one of the most popular app online. using ReactJS, Javascript, CSS."
          url= "https://spotify-clone-frontend-phi.vercel.app/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="iNTERACTIVE wEBISTE cards"
          description="lOREM"
          url= ""
        />
      </div>
    </div>
  );
};

export default Projects;