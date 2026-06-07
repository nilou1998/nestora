import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PropertyList from "./components/PropertyList/PropertyList";
import Footer from "./components/Footer/Footer";
import properties from "./data/properties";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PropertyList properties={properties} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
