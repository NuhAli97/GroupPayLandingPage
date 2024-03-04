import "./App.css";
import Home from "./Components/Home";
import How from "./Components/How";
import Footer from "./Components/Footer";
import AboutQatta from "./Components/AboutQatta"
import Counters from "./Components/Counters";
import Features from "./Components/Features";
import HomePageOrganizer from "./Components/HomePageOrganizer";
import FAQ from "./Components/FAQ"

function App() {
  
  return (
    <div className="App">
     
      <Home />
      {/* <AboutQatta /> */}
      <How />
        {/* <Features /> */}
        <HomePageOrganizer />
     
        <FAQ />
      <Footer />
    </div>
  );
}

export default App;

