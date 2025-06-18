const SkillCard = ({ name, logo }) => {
  return (
    <div
      className="flex flex-col items-center bg-gray-900 
             p-2 sm:p-3 md:p-4 
             rounded-lg shadow-md 
             w-20 sm:w-24 md:w-28 
             transform 
             transition-all duration-300 ease-in-out
             hover:scale-105 
             hover:shadow-[0_0_15px_rgba(248,109,0,0.4)]"
    >
      <img
        src={logo}
        alt={name}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 object-contain"
      />
      <h4
        className="text-gray-300 
            text-xs sm:text-sm md:text-base 
            text-center font-semibold"
      >
        {name}
      </h4>
    </div>
  );
};

export default SkillCard;
