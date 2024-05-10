const { Router } = require('express');
const CursoController = require('@app/controllers/CursoController.js');

const router = Router();

const cursoController = new CursoController();

router.get('/cursos', (req, res) => cursoController.getAll(req, res));
router.get('/cursos/:id', (req, res) => cursoController.getOneById(req, res));
router.post('/cursos', (req, res) => cursoController.createNew(req, res));
router.put('/cursos/:id', (req, res) => cursoController.update(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.delete(req, res));

module.exports = router;