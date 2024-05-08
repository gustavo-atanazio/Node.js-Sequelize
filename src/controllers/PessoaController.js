const Controller = require('./Controller.js');
const PessoaServices = require('@app/services/PessoaServices.js');

class PessoaController extends Controller {
    constructor() { super(new PessoaServices()); }
}

module.exports = PessoaController;