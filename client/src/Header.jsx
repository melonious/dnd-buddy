import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Icon icon="game-icons:dice-twenty-faces-twenty" height="45px" width="80px" style={{marginLeft: '20px', color: "white"}}/>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header