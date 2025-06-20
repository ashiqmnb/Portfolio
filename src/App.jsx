import "./App.css";
import bgImage from "./assets/mainbg.jpg"
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div
      className="bg-center h-screen text-white  overflow-auto scroll-smooth"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
