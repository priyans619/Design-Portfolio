import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import GoUp from "./components/GoUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0e0e0e]">
      <Navbar />
      <div className="space-y-10 md:space-y-20">
        <Home />
        <About />
        <Contact />
        <Skills />
        <Work />
        <GoUp /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
