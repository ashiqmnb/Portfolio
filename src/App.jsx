import "./App.css";
import bgImage from "./assets/mainbg.jpg"
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div
      className="bg-center h-screen text-white  overflow-auto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
