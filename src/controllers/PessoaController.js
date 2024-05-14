const Controller = require('./Controller.js');
const PessoaServices = require('@app/services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() { super(pessoaServices); }

    async getMatriculas(req, res) {
        const { estudanteID } = req.params;

        try {
            const matriculasList = await pessoaServices.getMatriculasByEstudante(Number(estudanteID));
            return res.status(200).json(matriculasList);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }

    async getAllPessoas(req, res) {
        try {
            const allPessoasList = await pessoaServices.getAllPessoasScope();
            return res.status(200).json(allPessoasList);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }
}

module.exports = PessoaController;