import React from "react";
import { BrowserRouter, Route, Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='app'>
                <Link to='/posts'>Посты</Link>
                <Link to='/about'>О сайте</Link>
            </div>
        </div>
    )
}

export default Navbar;