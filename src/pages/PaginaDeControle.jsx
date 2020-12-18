import React, {Component} from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../alunos/Listagem';
import { alunos } from '../util/constants';
import SearchBar from '../components/searchbar';

class PaginaDeControle extends Component {
    constructor(props) { //inicializa as informações
        super(props);

        this.state = {alunos: []} //atribuindo valor ao estado
    }

   componentDidMount() { //renderiza depois que carrega a página (lifecyclemeth.)
        this.setState({alunos: alunos})
    } 

    editarAluno = (aluno) => {
       console.log("aluno em edição no componente PaginaDeControle: ", aluno)
       this.setState({alunoEmEdicao: aluno})
    }

    excluirAluno = (aluno) => {
        console.log("aluno exlcuído no componente PaginaDeControle: ", aluno)
      
    }
 
    render() {
        return (
        <>
        <EstruturaDaPagina title='Controle de Alunos'>
            <Section titulo="Cadastro dos Alunos">
            <>
                {this.state.alunoEmEdicao &&
                    <span>Aluno em Edição: {this.state.alunoEmEdicao.name}</span>
                }
            </>
            </Section>

            <Section titulo="Listagem dos Alunos"> 
                <SearchBar></SearchBar>
                <Listagem alunos={this.state.alunos} editar={this.editarAluno} excluir={this.excluirAluno}></Listagem>
            </Section>
        </EstruturaDaPagina>
           
       </>
           
        )
    }

}

export default PaginaDeControle;

//o h2 vai ser passado como children da estruturaDaPagina
//tenho que ir na estruturadapagina e dizer que tem um children