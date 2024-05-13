class Controller {
    constructor(entityService) { this.entityService = entityService; }

    async getAll(req, res) {
        try {
            const data = await this.entityService.getAllRegisters();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }

    async getOneById(req, res) {
        const { id } = req.params;

        try {
            const umRegistro = await this.entityService.getOneRegisterById(Number(id));
            return res.status(200).json(umRegistro);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }

    async createNew(req, res) {
        const dadosParaCriacao = req.body;

        try {
            const novoRegistroCriado = await this.entityService.createRegister(dadosParaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;

        try {
            const wasUpdated = await this.entityService.updateRegister(updatedData, Number(id));

            if (!wasUpdated) {
                return res.status(400).json({ message: 'Registro não foi atualizado.' });
            }

            return res.status(200).json({ message: 'Registro atualizado.' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro interno do servidor.', error: error.message });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            await this.entityService.deleteRegister(Number(id));
            return res.status(200).json({ message: `id ${id} deletado.` });
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado no servidor.', error: error.message });
        }
    }
}

module.exports = Controller;