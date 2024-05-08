const { Router } = require('express');
const PessoaController = require('@app/controllers/PessoaController.js');

const router = Router();

const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));

module.exports = router;