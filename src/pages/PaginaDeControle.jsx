import React, {Component} from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../alunos/Listagem';
import SearchBar from '../components/searchbar';
import AlunoAPI from '../services/alunos'

class PaginaDeControle extends Component {
    constructor(props) { //inicializa as informações
        super(props);

        this.state = {alunos: []} //atribuindo valor ao estado
        this.excluirAluno = this.excluirAluno.bind(this)
    }

   componentDidMount() { //renderiza depois que carrega a página (lifecyclemeth.)
        this.carregarAlunos();
    } 

    componentDidUpdate(prevProps, prevState) {
        if (this.state.alunoEmEdicao === prevState.alunoEmEdicao) {
            return;
        }
    }

    async carregarAlunos() {
        const alunos = await AlunoAPI.buscarAlunos()
        console.log(alunos)
        this.setState({alunos: alunos})
    }

     editarAluno = (aluno) => {
       this.setState({alunoEmEdicao: aluno})
    }

    excluirAluno = (aluno) => {
        AlunoAPI.excluirAluno(aluno.id).then(() => this.carregarAlunos())
    }

    salvarAluno = aluno => {
        if (aluno.id) {
            AlunoAPI.atualizarAluno(aluno).then(() => {
                this.carregarAlunos();
                this.setState({alunoEmEdicao: null});
            });
            return;
        }

        AlunoAPI.inserirAluno(aluno).then(() => {
            this.carregarAluno();
            this.setState({alunoEmEdicao: null})
        });
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