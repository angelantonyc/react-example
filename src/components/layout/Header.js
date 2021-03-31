import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="container" style={headerStyle}>
            <h1>Hungry Hub</h1>
            <Link className="m-3" style={linkStyle} to="/">Home</Link> |
            <Link className="m-3" style={linkStyle} to="/about">  About</Link>  |
            <Link className="m-3" style={linkStyle} to="/contact">  Contact</Link>
        </header>
    )
}

const headerStyle = {
    background: '#153618',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;