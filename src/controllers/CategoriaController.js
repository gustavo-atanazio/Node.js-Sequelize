const Controller = require('./Controller.js');
const CategoriaServices = require('@app/services/CategoriaServices.js');

class CategoriaController extends Controller {
    constructor() { super(new CategoriaServices()); }
}

module.exports = CategoriaController;