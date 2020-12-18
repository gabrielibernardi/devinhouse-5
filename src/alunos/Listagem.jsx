import React, { Component } from 'react';
import './listagem.css';
import './tabela.css'


class Listagem extends Component {

handleEditar(aluno) {
    this.props.editar(aluno)
    console.log("aluno em edição: ", aluno)
}

handleExcluir(aluno) {
    this.props.excluir(aluno)
    console.log("Aluno excluído: ", aluno)

/* poderia ter usado {() => this.props.editar(aluno)} lá no onClick no lugar
de contruir essa função. Mas essa função me permite validar o evento antes de mandar 
para a tela*/

}

render() {
if (!this.props.alunos || this.props.alunos.length === 0) {
return <span>Não esxitem alunos cadastrados</span>

}
return (
<>
    <div className='listagem'>
        <table className='listagem-alunos'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>Turma</th>
                    <th>Telefone</th>
                    <th>Emergência</th>
                    <th className='acoes' colSpan='2'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {this.props.alunos.map(aluno => (
                <tr key={aluno.name}>
                    <td>{aluno.name}</td>
                    <td>{aluno.data}</td>
                    <td>{aluno.turma}</td>
                    <td>{aluno.telefone}</td>
                    <td>{aluno.emergencia}</td>
                    <td className="acoes"><button onClick={() => this.handleEditar(aluno)}>Editar</button></td>
                    <td className="acoes"><button onClick={() => this.handleExcluir(aluno)}>Excluir</button></td>
                </tr>

                ))}
            </tbody>
        </table>
    </div>
</>
)
}}


export default Listagem;