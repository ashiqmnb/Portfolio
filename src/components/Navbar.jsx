import resume from "../assets/resume/resume.pdf";

export const Navbar = () => {
   return (
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md hidden md:flex justify-between items-center py-5 px-5 sm:px-10 md:px-20 lg:px-32 z-50">
         <div className="flex space-x-10">
            <a href="#home" className="text-white hover:text-[#F86D00] transition">Home</a>
            <a href="#about" className="text-white hover:text-[#F86D00] transition">About</a>
            <a href="#experience" className="text-white hover:text-[#F86D00] transition">Experience</a>
            <a href="#skills" className="text-white hover:text-[#F86D00] transition">Skills</a>
            <a href="#project" className="text-white hover:text-[#F86D00] transition">Project</a>
            <a href="#contact" className="text-white hover:text-[#F86D00] transition">Contact</a>
         </div>

         <div>
            <a href={resume} download
               className="bg-[#F86D00] text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
            >
               Download CV
            </a>
         </div>
      </nav>
   );
};
