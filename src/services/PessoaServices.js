const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() { super('Pessoa'); }

    async getMatriculasByEstudante(id) {
        try {
            const estudante = await super.getOneRegisterById(id);
            const matriculasList = await estudante.getAulasMatriculadas();
            return matriculasList;
        } catch (error) {
            return error;
        }
    }
}

module.exports = PessoaServices;