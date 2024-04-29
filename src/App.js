import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
