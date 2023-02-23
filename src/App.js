import Home from "./components/Home";
import SideNav from "./components/SideNav";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";



function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // check the screen width when the component mounts and whenever the screen is resized
    function handleResize() {
      setIsMobile(window.innerWidth <= 480);
    }

    handleResize(); // call the function once on mount to initialize the state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="MobileApp">
        <Router>
        <Home />
        <Skills />
        <Showcase />
        <About />
        <Contact />
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
