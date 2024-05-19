const Controller = require('./Controller.js');
const PessoaServices = require('@app/services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() { super(pessoaServices); }

    async getAllPessoas(req, res) {
        try {
            const allPessoasList = await pessoaServices.getAllPessoasScope();
            return res.status(200).json(allPessoasList);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }
    
    async getAllMatriculas(req, res) {
        const { estudante_id } = req.params;

        try {
            const matriculasList = await pessoaServices.getAllMatriculasByEstudante(Number(estudante_id));
            return res.status(200).json(matriculasList);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }

    async getMatriculasAtivas(req, res) {
        const { estudante_id } = req.params;

        try {
            const matriculasList = await pessoaServices.getMatriculasAtivasByEstudante(Number(estudante_id));
            return res.status(200).json(matriculasList);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }

    async cancelRegisterEstudante(req, res) {
        const { estudante_id } = req.params;

        try {
            await pessoaServices.cancelPessoaAndMatriculas(Number(estudante_id));

            return res.status(200).json({
                message: `Matrículas referentes ao estudante com ID ${estudante_id} canceladas.`
            });
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }
}

module.exports = PessoaController;