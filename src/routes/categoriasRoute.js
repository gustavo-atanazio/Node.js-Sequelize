const { Router } = require('express');
const CategoriaController = require('@app/controllers/CategoriaController.js');

const router = Router();

const categoriaController = new CategoriaController();

router.get('/categorias', (req, res) => categoriaController.getAll(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.getOneById(req, res));
router.post('/categorias', (req, res) => categoriaController.createNew(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.update(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.delete(req, res));

module.exports = router;