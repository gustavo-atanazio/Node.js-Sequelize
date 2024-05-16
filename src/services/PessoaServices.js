const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() { super('Pessoa'); }

    async getAllMatriculasByEstudante(id) {
        try {
            const estudante = await super.getOneRegisterById(id);
            const matriculasList = await estudante.getTodasAsMatriculas();
            return matriculasList;
        } catch (error) {
            return error;
        }
    }

    async getMatriculasAtivasByEstudante(id) {
        try {
            const estudante = await super.getOneRegisterById(id);
            const matriculasList = await estudante.getAulasMatriculadas();
            return matriculasList;
        } catch (error) {
            return error;
        }
    }

    async getAllPessoasScope() {
        try {
            const pessoasList = await super.getRegistersByScope('allRegisters');
            return pessoasList;
        } catch (error) {
            return error;
        }
    }
}

module.exports = PessoaServices;