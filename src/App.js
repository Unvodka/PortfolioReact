import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from "./components/About";
import Footer from "./components/Footer";
import ContactMe from './components/Contact';
import Services from './components/Services';
import Particles from "react-particles-js";
import Presentation from './components/Presentation';
import ToggleDarkMode from './components/ToggleDarkMode';
import { useContext } from 'react';
import { ThemeContext } from './context';


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{backgroundColor: darkMode ? '#222' : 'wheat',
         color: darkMode ? 'wheat' : '#222'}} >
      
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
        <ToggleDarkMode />
        <Navbar />
        <Presentation />
        <About />
        <Services />
        <ContactMe />
        <Footer />
      
    </div>

  );
}

export default App;
