const Controller = require('./Controller.js');
const MatriculaServices = require('@app/services/MatriculaServices.js');

class MatriculaController extends Controller {
    constructor() { super(new MatriculaServices()); }
}

module.exports = MatriculaController;