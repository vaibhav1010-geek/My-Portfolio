// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import ScrollIndicator from "./components/ScrollIndicator";

export default function App() {
  return (
    <div className="dark bg-gray-900 text-gray-100">
      {/* background scroll line */}
      

      {/* <Navbar /> */}
      

      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
