import React from 'react';
import './section.css'

const Section = props => {
    const { titulo, children } = props;

    return (
        <div className="section">
            <h2 className="titulos">{titulo}</h2>
            {children}
        </div>
    )
}

export default Section;

//usando arrow function para criar o componente section.
//passei {titulo e children}
//quando for usar o componente tem que atribiur