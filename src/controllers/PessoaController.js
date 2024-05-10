const Controller = require('./Controller.js');
const PessoaServices = require('@app/services/PessoaServices.js');

class PessoaController extends Controller {
    constructor() { super(new PessoaServices()); }

    async getMatriculas(req, res) {
        const { estudanteID } = req.params;

        try {
            const matriculasList = await PessoaServices.getMatriculasByEstudante(Number(estudanteID));
            return res.status(200).json(matriculasList);
        } catch (error) {
            res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }
}

module.exports = PessoaController;