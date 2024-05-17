const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CursoServices = require('@app/services/CursoServices.js');

const cursoServices = new CursoServices();

class CursoController extends Controller {
    constructor() { super(cursoServices); }

    async getCursos(req, res) {
        const { data_inicial, data_final } = req.query;
        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try {
            const cursosList = await cursoServices.getAllRegisters(where);
            return res.status(200).json(cursosList);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }
}

module.exports = CursoController;