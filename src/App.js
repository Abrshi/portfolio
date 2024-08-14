import './App.css';
import Header from  './components/Header/Header'
import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';
import Carousel from './components/Carousel/Carousel';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import ContactMe from './components/ContactMe/ContactMe';
function App() {
  return (
    <div className="App">
    <Header />
    <Introduction />
    <AboutMe />
    <Carousel/>
    <Work/>
    <ContactMe/>
    <Footer/>
    </div>
  );
}

export default App;
