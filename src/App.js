import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Work from './Components/Work'
import Perform from './Components/Perform'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AlignItemsList from './Components/List'

function App() {
  return (
    <div className="App">
  <Header/>
  <About/>
  <AlignItemsList/>
  <Work/>
  <Perform/>
  <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
