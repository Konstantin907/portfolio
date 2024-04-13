import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
  <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <a href="https://bank-app-hs1l.vercel.app/" 
        className="cursor-pointer"
      >
            <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain cursor-pointer-important"
          />
       
      </a>
      
      
      

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a href="https://bank-app-hs1l.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-2 text-gray-300 cursor-pointer">{url}</a>
      </div>
    </div>
  );
};

export default ProjectCard;