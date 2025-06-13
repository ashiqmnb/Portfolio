import profileImg from "../assets/profileImg2.png";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import resume from "../assets/resume/resume.pdf";
import { useEffect, useState } from "react";

const Home = () => {

   const roles = [
     'Full Stack .Net Developer (.Net + React)',
     'React Developer',
     '.Net Developer',
   ];

   const [index, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex(prev => (prev + 1) % roles.length);
      }, 2000);

      return () => clearInterval(interval);
   }, []);


   return (
      <>
         <section id="home" className="h-screen flex flex-col-reverse md:flex-row items-center justify-between px-5 sm:px-10 md:px-20 lg:px-32 text-white">
               {/* Left Side */}
            <div className="flex-1 space-y-3 text-center md:text-left">
               <p className="text-gray-400 text-2xl">Hello, I'm</p>
               <h1 className="text-4xl font-semibold">
                  Mohammed Ashiq A
               </h1>
               <h2 className="text-2xl sm:text-3xl font-bold text-[#F86D00]">
                  {roles[index]}
               </h2>
               <p className="text-gray-400 text-2xl">From Malappuram, Kerala</p>
               {/* Social Icons */}
               <div className="flex justify-center md:justify-start space-x-4 pt-3">
                  <a href="https://www.linkedin.com/in/ashiqamohd">
                     <FaLinkedinIn className="text-2xl text-white hover:text-[#F86D00] hover:-translate-y-1 transition-transform duration-200"></FaLinkedinIn>
                  </a>
                  <a href="https://github.com/ashiqmnb">
                     <FiGithub className="text-2xl text-white hover:text-[#F86D00]  hover:-translate-y-1 transition-transform duration-200"></FiGithub>
                  </a>
                  <a href="https://www.instagram.com/_asshhq___">
                     <FaInstagram className="text-2xl text-white hover:text-[#F86D00]  hover:-translate-y-1 transition-transform duration-200"></FaInstagram>
                  </a>
                  <a href="https://leetcode.com/u/asshhq">
                     <SiLeetcode className="text-2xl text-white hover:text-[#F86D00]  hover:-translate-y-1 transition-transform duration-200"></SiLeetcode>
                  </a>
               </div>
               
               <div className="flex justify-center md:justify-start gap-4 pt-5">
                  <a href={resume} download
                        className="border border-[#F86D00] text-white px-6 py-2 rounded-md hover:bg-[#F86D00] transition"
                  >
                     Download CV
                  </a>
               </div>
            </div>
            {/* Right Side Image */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
               <img
                  src={profileImg}
                  alt="Hero"
                  className="w-[250px] sm:w-[300px] md:w-[500px] object-cover"
               />
            </div>
         </section>

         <hr className="w-1/2 mx-auto border-t-2 border-[#F86D00] mt-4  rounded-full" />
      </>
   );
};

export default Home;
