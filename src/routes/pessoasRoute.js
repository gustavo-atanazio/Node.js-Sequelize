const { Router } = require('express');
const PessoaController = require('@app/controllers/PessoaController.js');
const MatriculaController = require('@app/controllers/MatriculaController.js');

const router = Router();

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
router.get('/pessoas/todos', (req, res) => pessoaController.getAllPessoas(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.getOneById(req, res));
router.post('/pessoas', (req, res) => pessoaController.createNew(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));

router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.getMatriculasAtivas(req, res));
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res) => pessoaController.getAllMatriculas(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.getOne(req, res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.createNew(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.update(req, res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.delete(req, res));

module.exports = router;