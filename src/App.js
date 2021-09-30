import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/index";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Resume from "./components/Resume";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactMe from './components/Contact';
import Services from './components/Services';
import Particles from "react-particles-js";


function App() {
  return (
    <div className="App">
      <>
        <Home />
        <Particles 
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "square",
                stroke: {
                  width: 6,
                  color: "#555857"
                }
              }
            }
          }}
        />
        <Navbar />
        <Header />
        <About />
        <div id="experiencesId" className="experiences"><h2>EXPERIENCES</h2></div>
        <Resume />
        <Services />
        <ContactMe />
        <Footer />
      </>
    </div>

  );
}

export default App;
