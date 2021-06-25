import React, {useState}  from "react";
import Footer from './components/Footer/';
import Header from './components/header';
import Slider from './components/Slider/Slider';
import About from './components/About/';
import Nav from './components/Nav/';
import Portfolio from './components/Portfolio/';
import Contact from './components/contact';
import Resume from './components/resume';
import './App.css';
import Intro from './components/intro';

function Pagerender (props) {
var page;
    if (props.page=="about"){
        page=<About />
    } else if (props.page=="portfolio"){
    page=<Portfolio />


} else if (props.page=="contact"){
    page=<Contact />

} else if (props.page=="resume"){
    page=<Resume />
}


return (
    <>
    {

page


    }
    </>
)
}


function App() {
const [pages]=useState([{pagename: "about"}, {pagename: "portfolio"}, {pagename: "contact"}, {pagename: "resume"}])
const [currentPage, setCurrentPage]=useState(pages[0])



    return (

        <>
<Nav setCurrentPage={setCurrentPage}></Nav>

<Pagerender page={currentPage.pagename}></Pagerender>
<Footer />


        </>
        
        
    );
}
/* {/* // <div className="App">
        //     {/* <Header/>
        //     <Slider />
        //     <About id="about" /> 
            
            
            
        //     <Portfolio />
        //     <Contact />
        //     <Resume />
            
        //     <Footer/> }
 


        // </div>  */
export default App;

