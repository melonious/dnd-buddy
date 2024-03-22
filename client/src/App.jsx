import axios from 'axios';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Classes from './Classes';

function App() {

  return (
    <>
      <Header/>
      <div>
        <h1>DnD Buddy</h1>
        <h3>Welcome to the wonderful world of DnD!</h3>
        <p>DnD has so much to offer, but it can be tough getting started. Luckily, we're here to help!</p>
      </div>
      <Classes/>
      <Footer/>
    </>
  )
}

export default App
