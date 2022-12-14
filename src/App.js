import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
// import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import TopButton from "./components/topButton/TopButton";
import Navbar from "./components/navbar/Navbar";
import BusyNow from "./components/busyNow/BusyNow";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <About />
      <BusyNow />
      {/* <Experience /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
