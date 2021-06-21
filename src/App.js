import React  from "react";
import Footer from './components/footer';
import Header from './components/header';
import Slider from './components/Slider/Slider';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import './App.css';
// import Map from './components/map';


function App() {

    return (
        
        <div className="App">
            <Header/>
            <Slider />
            <About id="about" />  
            <Portfolio />
            <Contact />
            <Resume />
            {/* <Map /> */}
            <Footer/>
 


        </div>
    );
}

export default App;

