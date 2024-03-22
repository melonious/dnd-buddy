import { Icon } from '@iconify/react';

function Header(){
    return(
        <header>
            <Icon icon="game-icons:dice-twenty-faces-twenty" height="45px" width="80px" style={{marginLeft: '20px', color: "white"}}/>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header