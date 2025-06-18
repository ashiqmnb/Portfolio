import { ImMoveUp } from "react-icons/im";
import { languages } from "../data/skillsData";
import { frontend } from "../data/skillsData";
import { backend } from "../data/skillsData";
import { database } from "../data/skillsData";
import { others } from "../data/skillsData";
import SkillCard from "./SkillCard";

// git, docker, postman, vercel, figma

const Skills = () => {
   return (
      <div
         id="skills"
         className="px-5 sm:px-10 md:px-20 lg:px-32 py-48 md:py-24"
      >
         <h2 className="text-3xl font-bold text-[#F86D00] mb-4">Skills</h2>

         <div className="w-full  px-5 sm:px-10 md:px-20 lg:px-32 py-5">
            <h2 className="text-2xl font-serif font-bold text-[#F86D00] mb-5 text-center">
               Programming Languages
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
               {languages.map((item, index) => (
                  <SkillCard key={index} name={item.name} logo={item.logo}/>
               ))}
               </div>
         </div>
         
         {/* <div className="w-full  px-5 sm:px-10 md:px-20 lg:px-32 py-5">
            <h2 className="text-2xl font-serif font-bold text-[#F86D00] mb-5 text-center">
               Frontend Development
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
               {frontend.map((item, index) => (
                  <SkillCard key={index} name={item.name} logo={item.logo}/>
               ))}
               </div>
         </div>

         <div className="w-full  px-5 sm:px-10 md:px-20 lg:px-32 py-5">
            <h2 className="text-2xl font-serif font-bold text-[#F86D00] mb-5 text-center">
               Database
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
               {database.map((item, index) => (
                  <SkillCard key={index} name={item.name} logo={item.logo}/>
               ))}
               </div>
         </div> */}

         <div className="w-full px-5 sm:px-10 md:px-20 lg:px-32 py-5">
            <div className="flex flex-col lg:flex-row gap-2 ">
               {/* Frontend Section */}
               <div className="w-[80%] mx-auto">
                  <h2 className="text-2xl font-serif font-bold text-[#F86D00] mb-5 text-center">
                  Frontend Development
                  </h2>
                  <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
                     {frontend.map((item, index) => (
                        <SkillCard key={index} name={item.name} logo={item.logo} />
                     ))}
                  </div>
               </div>

               {/* Database Section */}
               <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold text-[#F86D00] mb-5 text-center">
                  Database
                  </h2>
                  <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
                  {database.map((item, index) => (
                     <SkillCard key={index} name={item.name} logo={item.logo} />
                  ))}
                  </div>
               </div>
            </div>
         </div>



         <div className="w-full  px-5 sm:px-10 md:px-20 lg:px-32 py-5">
            <h2 className="text-2xl font-serif font-bold text-[#F86D00] mb-5 text-center">
               Backend Development
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
               {backend.map((item, index) => (
                  <SkillCard key={index} name={item.name} logo={item.logo}/>
               ))}
               </div>
         </div>

         <div className="w-full  px-5 sm:px-10 md:px-20 lg:px-32 py-5">
            <h2 className="text-2xl font-serif font-bold text-[#F86D00] mb-5 text-center">
               Others
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
               {others.map((item, index) => (
                  <SkillCard key={index} name={item.name} logo={item.logo}/>
               ))}
               </div>
         </div>

         <hr className="w-1/2 mx-auto border-t-2 border-[#F86D00] mt-20 rounded-full" />
      </div>
   );
};

export default Skills;
