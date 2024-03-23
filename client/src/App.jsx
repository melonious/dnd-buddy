// import axios from 'axios';
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
      <div>
        <p>
          If any of those classes spoke to you, you're off to a great start! If not, no worries. We gotchu.
          There are two ways we like to go about starting a new character design:<br/>
          1. Start with concept<br/>
          2. Start with class<br/>
          If possible, we prefer starting with option 1. Take a few minutes to search your soul and think about what kind of character you want to play. Your GM (game master, also known as the DM - Dungeon Master) can give you the low down on the world you'll be playing in. Don't be scared to ask questions! Your GM wants you to have fun :)<br/>
          Here are some ideas of brainstorming questions you can ask yourself:
        </p>
        <ul>
          <li>Where does your character fall on the alignment chart? i.e. Chaotic Good, Lawful Evil</li>
          <li>What was their childhood like?</li>
          <li>What do they want?</li>
          <li>What are their strengths?</li>
          <li>What are their weaknesses?</li>
          <li>What is their family like?</li>
        </ul>
        <p>Take some time to ponder, then open up a blank note, document, whatever suits your fancy, and set a timer for 15 minutes. Write down whatever you can think of about your character until the times goes off. Don't worry about spelling or continuity or anything like that (the joys of a free write sprint). Now GO!
        </p>
        
      </div>
      {/* TODO: fix text hidden behind footer */}
      <Footer/>
    </>
  )
}

export default App
