import React from 'react'
// say rce and tab
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
const Navbar=({icon,title})=> {
    
        return (
        <nav className='navbar'>
            <h1>
            <i className={icon} /> {title}
            </h1>
            {/* client side routing does not use a tag */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>


        </nav>
        )
    
}
Navbar.defaultProps={
    title:'Github Finder',
    icon:'fab fa-github'
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}
export default Navbar
