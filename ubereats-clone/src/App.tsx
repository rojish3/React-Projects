import AppInfo from "./components/AppInfo";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import Feeds from "./components/Feeds";
import Footer from "./components/Footer";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Hero />
      <GetApp />
      <Feeds />
      <Cities />
      <Countries />
      <hr />
      <AppInfo />
      <hr className="w-[90%] mx-auto" />
      <Footer />
    </>
  );
};

export default App;
