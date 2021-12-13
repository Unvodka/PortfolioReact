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
import Presentation from './components/Presentation';


function App() {
  return (
    <div className="App">
      <>
        <Home />
        <Particles 
        height='180vh'
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 400
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
        <Presentation />
        <Header />
        <About />
        <Resume />
        <Services />
        <ContactMe />
        <Footer />
      </>
    </div>

  );
}

export default App;
