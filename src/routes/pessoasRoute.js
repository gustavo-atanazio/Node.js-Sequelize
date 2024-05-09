const { Router } = require('express');
const PessoaController = require('@app/controllers/PessoaController.js');

const router = Router();

const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.getOneById(req, res));
router.post('/pessoas', (req, res) => pessoaController.createNew(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));

module.exports = router;