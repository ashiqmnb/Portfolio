import aboutImg from "../assets/aboutImg2.png";

const About = () => {
  return (
      <section
        id="about"
        className="h-screen flex flex-col md:flex-row items-center justify-between px-5 sm:px-10 md:px-20 lg:px-32 py-48 md:py-2"
      >
        <div className="hidden md:flex w-full md:w-1/2 justify-center mb-8 md:mb-0">
          <img
            src={aboutImg}
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#F86D00] mb-4">About Me</h2>
          <p className="leading-relaxed text-gray-300 text-lg ">
            I'm a .Net Full Stack Developer (.Net + React) with a focus on creating clean, responsive, and user-friendly
            web applications. I work with technologies like .NET, React, JavaScript, C#, and SQL to
            build both the frontend and backend of modern websites.
            <br />
            <br />
            Along with development, I have a strong interest in UI design and enjoy crafting intuitive,
            visually appealing interfaces that improve user experience.
            <br />
            <br />
            I hold a Bachelor's degree in Computer Applications (BCA) from University of Calicut. Outside of development, I enjoy
            reading and drawing hobbies that fuel my creativity and attention to detail.
          </p>
        </div>
      </section>
  );
};

export default About;
