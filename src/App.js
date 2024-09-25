import './App.css';
import AboutMe from './components/Aboutus';
import Companies from './components/Company';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className=" h-2">
    
     {/* navbar*/ }
<NavBar/>
    {/* intro*/ }
    <Home/>
        {/* About us*/ }
        <AboutMe/>
                {/* services*/ }
                <Skills/>
                                {/*portfolio*/ }
                                <Portfolio/>
                                {/* company*/ }
                                 <Companies/>   
                                 
                                 {/*Contact us*/}    
                                 <ContactUs/>
                                                          {/*footer*/ }
                                                          <Footer/>






    </div>
  );
}

export default App;
