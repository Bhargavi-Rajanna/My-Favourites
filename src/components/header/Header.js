import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header= () => {
    return(
        <div className="header">
            <Link to="/">
                 <svg aria-label="Home" className="home" fill="#fff" height="30" viewBox="0 0 48 48" width="50"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
            </Link>
            <Link to="/favourites">
                <svg className="heart" fill="#fff" height="50" width="50" viewBox="0 0 48 48">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                </svg> 
            </Link>
        </div>
    )
}

export default Header;