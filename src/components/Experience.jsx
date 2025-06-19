const Experience = () => {

  const educationData = [
    {
      title: "University of Calicut",
      college:"GEMS Arts and Science College Ramapuram (Autonomous)",
      years: "2021 - 2024",
      degree: "Bachelor of Computer Applications (BCA)",
    },
    {
      title: "GHSS Mankada",
      years: "2019 - 2021",
      degree: "Computer Commerce",
    }
  ];


  const experienceData = [
    {
      company: "Bridegeon Solutions LLP",
      years: "Nov 2025 - Present",
      role: "Full Stack Dot Net Developer Intern",
    },
    {
      company: "Bridegeon Solutions LLP",
      years: "May 2024 - Nov 2024",
      role: "React Developer Intern",
    }
  ];

  return (
      <section
        id="experience"
        className="md:h-screen flex flex-col md:flex-row items-center justify-between px-5 sm:px-10 md:px-20 lg:px-32 py-20 md:py-20"
      >
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education Section */}
            <div>
              <h2 className="text-3xl font-bold text-[#F86D00] mb-6">Education</h2>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-white font-semibold text-lg">{edu.title}</h3>
                    <h4 className="text-gray-300 font-semibold">{edu.college}</h4>
                    <p className="text-[#F86D00] text-sm">{edu.years}</p>
                    <p className="text-gray-300">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-3xl font-bold text-[#F86D00] mb-6">Experience</h2>
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                    <p className="text-[#F86D00] text-sm">{exp.years}</p>
                    <p className="text-gray-300">{exp.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Experience;
