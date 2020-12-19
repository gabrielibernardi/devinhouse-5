import axios from 'axios';

import * as constants from './constants';

const BASE_URL = `${constants.DEVINHOUSE_API}/alunos`;

class AlunoService {
    buscarAlunos() {
        axios.get(BASE_URL)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

}

export default new AlunoService();