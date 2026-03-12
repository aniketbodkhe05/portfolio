import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}
export default App;
