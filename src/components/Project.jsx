import { useState } from "react";
import { projects } from "../data/projectData";
import ProjectModal from "./ProjectModal";

const Project = () => {

   const [selectedProject, setSelectedProject] = useState(null);

   return (
      <section
         id="project"
         className="px-5 sm:px-10 md:px-20 lg:px-32 py-24"
      >
         <h2 className="text-3xl font-bold text-[#F86D00] mb-10 text-center">
            Projects
         </h2>

         <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
               <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-md w-72 sm:w-80 md:w-96 
                        transform 
                        transition-all duration-300 ease-in-out
                        hover:scale-105 
                        hover:shadow-[0_0_15px_rgba(248,109,0,0.4)]"
               >
                  <img
                     src={project.images[0]}
                     alt={project.name}
                     className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-white">
                     <h3 className="text-xl font-semibold">{project.name}</h3>
                     <p className="text-sm text-gray-300">{project.title}</p>
                     <p className="text-sm text-gray-300">{project.duration}</p>

                     {/* Tech stack */}
                     <div className="flex flex-wrap gap-2 mt-3">
                        {project.stack.split(",").map((tech, techIndex) => (
                           <span
                              key={techIndex}
                              className="text-[10px] bg-orange-500 bg-opacity-20 text-white px-1.5 py-0.5 rounded-md"
                           >
                              {tech.trim()}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
         
         {/* Project Modal */}
         <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </section>
   );
};

export default Project;
