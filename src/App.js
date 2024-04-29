import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <SectionContainer />
      <Footer />
    </div>
  );
}

export default App;
