import React from 'react';

class EstruturaDaPagina extends React.Component {
   

    render() {
        return  (
        <body>
            <div className='header'>
                <h1>Escola Amorinha</h1>
                <h2>{this.props.title}</h2> 
            </div>
            {this.props.children}
        </body>
        )
    }
}

export default EstruturaDaPagina;

