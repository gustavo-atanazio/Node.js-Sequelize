const Controller = require('./Controller.js');
const CursoServices = require('@app/services/CursoServices.js');

class CursoController extends Controller {
    constructor() { super(new CursoServices()); }
}

module.exports = CursoController;