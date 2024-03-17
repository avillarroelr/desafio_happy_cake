import React from 'react';
import '../index.css';

const Contacto = () => {
    return (
        <section>
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <form action="">
                <label>Correo:</label>
                <input type="email" placeholder='name@example.com'/>
                <label>Descripción</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </section>
    );
};

export default Contacto;
