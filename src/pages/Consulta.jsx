import React, {Component} from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Listagem from '../alunos/Listagem';
import { alunos } from '../util/constants';
import SearchBar from '../components/searchbar';

class Consulta extends Component {
    constructor(props) {
        super(props);

        this.state = {alunos: []}
    }

   componentDidMount() {
        console.log('alunos', this.state.alunos)
        this.setState({alunos: alunos})
        console.log('alunos depois do setState: ', this.state.alunos)
    } 
 


    render() {
        return (
           <>
            <EstruturaDaPagina title='Consulta de Alunos'>
                <h2>Listagem dos Alunos</h2>
                <SearchBar></SearchBar>
                <Listagem alunos={this.state.alunos}></Listagem>
             </EstruturaDaPagina>
           
       </>
           
        )
    }

}

export default Consulta;

//o h2 vai ser passado como children da estruturaDaPagina
//tenho que ir na estruturadapagina e dizer que tem um children