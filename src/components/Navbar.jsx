import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import homeImage from '../img/home.png';
import noteImage from '../img/note.png';
import cakesliceImage from '../img/cakeslice.png';

const Navbar = () => {
    return (
        <header>
            <ul>
                <li>
                    <img src={homeImage} alt="" />
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <img src={noteImage} alt="" />
                    <Link to="/contacto">Contacto</Link>
                </li>
                </ul>
                <span>Happy Cake
                    <img src={cakesliceImage} alt="" />
                </span>
        </header>
    );
};

export default Navbar;