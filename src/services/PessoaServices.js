const dataSource = require('@app/database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
        this.matriculaServices = new Services('Matricula');
    }

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

    async cancelPessoaAndMatriculas(id) {
        return dataSource.sequelize.transaction(async transaction => {
            await super.updateRegister({ ativo: false }, { id }, transaction);
            
            await this.matriculaServices.updateRegister(
                { status: 'cancelado' },
                { estudante_id: id },
                transaction
            );
        });
    }
}

module.exports = PessoaServices;