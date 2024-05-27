import './App.css';
import {CartProvider} from './ContextCart'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import AlignItemsList from './Components/List'

function App() {
  return (
  <CartProvider>

    <div className="App">
  <Header/>
  <About/>
  <AlignItemsList/>
  <Footer/>
    </div>
  </CartProvider>
  );
}

export default App;
