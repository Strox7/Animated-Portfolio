import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/servicess/Services";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallex type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
