import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <About />
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
