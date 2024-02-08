import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";

export const App = () => (
  <div className="bg-primary w-full">
    <div className="flex justify-center items-center fixed w-full z-[10]">
      <div className=" w-full text-white">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="w-full xl:max-w-[1280px] text-white">
        <Hero />
      </div>
    </div>

    <div className="pg-primary px-6 sm:px-10 flex justify-center">
      <div className=" w-full xl:max-w-[1440px] text-white flex flex-col justify-center">
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
