import Header from './components/Header/Header' 
import Hero from './components/Hero/Hero'
import './App.css'
import Profile from './components/Profile/Profile';
import Residencies from './components/Residencies/Residencies'
import Values from './components/Values/Values';
import Contacts from './components/Contacts/Contacts';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer'
import Saulltechhero from './components/Hero/saulltechhero';

function App() {
  return (
  <div className="App">
    
    <div>
      <div className="white-gradient"/>
    <Header/>
    <Saulltechhero/>
    {/* <Hero/> */}
    </div>
    <Residencies/>
    <Values/>
    <Contacts/>
    <Profile/>
    <GetStarted/>
    <Footer/>
  </div>
  );
}

export default App;
