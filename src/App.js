import "./App.css";
import Home from "./Components/Home";
import How from "./Components/How";
import Footer from "./Components/Footer";
import AboutQatta from "./Components/AboutQatta";
import Counters from "./Components/Counters";
import Features from "./Components/Features";
import HomePageOrganizer from "./Components/HomePageOrganizer";
import FAQ from "./Components/FAQ";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className={`w-screen h-screen ${i18n.language === "ar" ? "rtl" : ""}`}>
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
