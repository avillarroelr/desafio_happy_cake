import React from 'react';
import '../index.css';
import sweetImage from '../img/sweet.png';

const Home = () => {
    return (
        <main>
            <h1>Bienvenido a <span>Happy Cake</span></h1>
            <h4>El Lugar de los pasteles Felices.</h4>
            <img src={sweetImage} alt="" />
        </main>
    );
};

export default Home