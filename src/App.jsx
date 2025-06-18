import "./App.css";
import bgImage from "./assets/mainbg.jpg"
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Experience";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div
      className="bg-center h-screen text-white  overflow-auto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Skills/>
    </div>
  );
}

export default App;
