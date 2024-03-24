// import axios from 'axios';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Classes from './Classes';

function App() {

  return (
    <>
    <Header/>
    <div className="body">
      <div className="nav">
        <span>Jump To:</span>
        <a href="#getting-started" className="navBtn">Getting Started</a>
        <a href="#character-design" className="navBtn">Character Design</a>
      </div>
      <div>
        <h1>DnD Buddy</h1>
        <h3>Welcome to the wonderful world of DnD!</h3>
        <p>DnD has so much to offer, but it can be tough getting started. Luckily, we're here to help!</p>
      </div>
      <div>
        <h3 id="getting-started">Getting Started</h3>
        <p>What even is DnD? First created in 1974, Dungeons & Dragons is a robust tabletop role-playing game (TTRPG) that is credited as the beginning of modern role-playing games (RPGs). etc etc...</p>
        <h3 id="character-design">Character Design</h3>
        <p>
          There are two ways we like to go about starting a new character design:<br/>
          1. Start with concept<br/>
          2. Start with class<br/>
          If possible, we prefer starting with option 1. Take a few minutes to search your soul and think about what kind of character you want to play. Your GM (game master, also known as the DM - Dungeon Master) can give you the low down on the world you'll be playing in. Don't be scared to ask questions! Your GM wants you to have fun :)<br/>
        </p>
        <h4>Option 1: Start with Character Concept</h4>
        <p>In our opinion, starting with character concept can help the other pieces of character design fall into place more easily. For example, let's say your character grew up somewhere rural on a farm. They might be a brawny and straightforward type of person, so it would make sense to choose a strength-focused class with a straightforward fighting style like a Barbarian. On the other hand, if your character is an orphan who grew up stealing and sneaking to survive on hash city streets, then a Rogue would make more sense. (Don't worry about what these classes mean, we'll get there soon!).</p>
        <p>Here are some ideas of brainstorming questions you can ask yourself:</p>
        <ul>
          <li>Where does your character fall on the alignment chart? i.e. Chaotic Good, Lawful Evil</li>
          <li>What was their childhood like?</li>
          <li>What do they want?</li>
          <li>What are their strengths?</li>
          <li>What are their weaknesses?</li>
          <li>What is their family like?</li>
          <li>What is their personality? (note: if you're new to role playing, it's totally okay to choose your own personality!)</li>
        </ul>
        <p>Take some time to ponder, then open up a blank note, document, whatever suits your fancy, and set a timer for 15 minutes. Write down whatever you can think of about your character until the times goes off. Don't worry about spelling or continuity or anything like that (the joys of a free write sprint). Now GO!
        </p>
      </div>
      <Classes/>
    </div>
      <Footer/>
    </>
  )
}

export default App
