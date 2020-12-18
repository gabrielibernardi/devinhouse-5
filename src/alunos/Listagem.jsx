import React, { Component } from 'react';
import './listagem.css';

class Listagem extends Component {
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
                    <th className='acoes' colSpan='2'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {this.props.alunos.map(aluno => (
                <tr key={aluno.name}>
                    <td>{aluno.name}</td>
                    <td className="acoes"><button>Editar</button></td>
                    <td className="acoes"><button>Excluir</button></td>
                </tr>

                ))}
            </tbody>
        </table>
    </div>
</>
)
 }}


export default Listagem;