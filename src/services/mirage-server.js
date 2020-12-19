import {createServer, Model} from 'miragejs';
import * as constants from './constants';
import { alunos } from '../util/constants';

export function criarServidor({environment = 'test'} = {}) {
    let server = createServer({
        environment,

        models: {
            aluno: Model,
        },

        seeds(server) {
            alunos.forEach(aluno => server.create("aluno", aluno))     
            
        },

        routes() {
            this.namespace = constants.DEVINHOUSE_API;

            this.get('/alunos', schema => schema.alunos.all().models)
            //let newId = 3
            this.post("/alunos", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            //attrs.id = newId++
        
            return schema.alunos.create(attrs);
      });

        this.put("/alunos", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        
        return schema.alunos.create(attrs);
      });

        this.delete("/alunos/:id", (schema, request) => {
        const id = request.params.id;

        return schema.alunos.find(id).destroy();
      });
    },
  });
     
    return server;
}