import { useState, useEffect, createContext } from 'react';
// import axios from 'axios';
import Card from './Card';

export const ClassContext = createContext();

function Classes(){

    const simpleDescriptions = [
        {"Barbarian": "big strong", "icons": ["ri:sword-fill"]},
        {"Bard": "toss a coin", "icons": ["game-icons:pan-flute"]},
        {"Cleric": "in the name of god, I buff thee", "icons": ["simple-line-icons:magic-wand"]},
        {"Druid": "animal lover", "icons": ["simple-line-icons:magic-wand"]},
        {"Fighter": "exactly what it sounds like", "icons": ["ri:sword-fill"]},
        {"Monk": "smack a bitch up", "icons": ["ph:hands-clapping"]},
        {"Paladin": "holier than thou crusader", "icons": ["ri:sword-fill"]},
        {"Ranger": "sexy arrow shooty person", "icons": ["mdi:bow-arrow"]},
        {"Rogue": "I fear you are underestimating the sneakiness, sir.", "icons": ["game-icons:cloak-dagger"]},
        {"Sorcerer": "attended Hogwarts", "icons": ["simple-line-icons:magic-wand"]},
        {"Warlock": "magical sugar baby", "icons": ["simple-line-icons:magic-wand"]},
        {"Wizard": "I put a spell on you", "icons": ["simple-line-icons:magic-wand"]}
    ]

    // const [classes, setClasses] = useState([]);

    // const fetchClasses = async () => {
    //     const response = await axios.get("http://localhost:8080/api/classes");
    //     setClasses(response.data);
    // };

    // useEffect(() => {
    //     fetchClasses()
    // }, [])

    return(
        <div className="classes-container">
            <h3>Let's Start with Classes</h3>
            <p>The standard DnD 5e Player's Handbook offers 12 classes to choose from, with even more available through supplemental content. Wow, that's a lot! But don't worry, we're all about the basics here. The 12 default classes are:</p>
            {
                simpleDescriptions.map((description, index) => (
                    <Card key={index} description={description}/>
            ))}
        </div>
    );
}

export default Classes