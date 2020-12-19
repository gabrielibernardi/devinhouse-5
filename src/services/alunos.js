import axios from 'axios';

import * as constants from './constants';

const BASE_URL = `${constants.DEVINHOUSE_API}/alunos`;

class AlunoService {
    buscarAlunos() {
        return axios.get(BASE_URL)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    inserirAluno(aluno) {
		return axios.post(BASE_URL, aluno)
			.catch(error => {
				throw error;
			})
	}

    atualizarAluno(aluno) {
		return axios.put(BASE_URL, aluno)
			.catch(error => {
				throw error;
			})
	}
    
    excluirAluno(id) {
		return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
				throw error;
			});
	}


}

export default new AlunoService();