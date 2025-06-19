const ProjectModal = ({ project, onClose }) => {
   if (!project) return null;

   const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
         onClose();
      }
   };

   return (
      <div
         className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 overflow-hidden"
         onClick={handleBackdropClick}
      >
         <div
            className="bg-gray-900 text-white rounded-2xl w-full 
               max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl 
               max-h-[85vh] sm:max-h-[85vh] md:max-h-[90vh] 
               overflow-y-auto shadow-lg relative 
               p-4 sm:p-6 scrollbar-none"
               onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <button
               className="absolute top-3 right-4 text-white text-4xl hover:text-[#F86D00]"
               onClick={onClose}
            >
               &times;
            </button>

            {/* Header */}
            <div className="mb-4">
               <h2 className="text-2xl font-bold text-[#F86D00]">{project.name}</h2>
               <p className="text-sm text-gray-300">{project.title}</p>
               <p className="text-sm text-gray-400">{project.duration}</p>
            </div>

            {/* Image slider */}
            <div className="flex overflow-x-auto gap-4 mb-4 scrollbar-none">
               {project.images.map((img, idx) => (
                  <img
                  key={idx}
                  src={img}
                  alt={`Project ${idx}`}
                  className="w-80 h-48 object-cover rounded-lg flex-shrink-0"
                  />
               ))}
            </div>

            {/* Description */}
            <div className="mb-4">
               <h3 className="text-lg font-semibold mb-1">Description</h3>
               <p className="text-xs text-gray-300 leading-relaxed">
                  {project.description}
               </p>
            </div>

            {/* Stack */}
            <div>
               <h3 className="text-lg font-semibold mb-1">Tech Stack</h3>
               <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.split(",").map((tech, index) => (
                  <span
                     key={index}
                     className="text-[11px] bg-orange-500 bg-opacity-20 text-white px-2 py-1 rounded-full"
                  >
                     {tech.trim()}
                  </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectModal;
