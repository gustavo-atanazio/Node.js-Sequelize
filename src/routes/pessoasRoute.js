const { Router } = require('express');
const PessoaController = require('@app/controllers/PessoaController.js');
const MatriculaController = require('@app/controllers/MatriculaController.js');

const router = Router();

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.getOneById(req, res));
router.post('/pessoas', (req, res) => pessoaController.createNew(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));

router.get('/pessoas/:estudanteID/matriculas', (req, res) => pessoaController.getMatriculas(req, res));
router.post('/pessoas/:estudanteID/matriculas', (req, res) => matriculaController.createNew(req, res));

module.exports = router;