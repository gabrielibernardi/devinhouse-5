import React from 'react';

class EstruturaDaPagina extends React.Component {
   

    render() {
        return  (
        <div className='mainPage'>
            <div className='header'>
                <h1>Escola Amorinha</h1>
                <h2>{this.props.title}</h2> 
            </div>
            {this.props.children}
        </div>
        )
    }
}

export default EstruturaDaPagina;

//meu componente está recebendo uma propriedade title
// quem chamar ele vai ter que passar essa propriedade

//o componente recebe um children também