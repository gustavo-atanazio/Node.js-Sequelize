const dataSource = require('@app/models');

class Services {
    constructor(modelName) { this.model = modelName; }

    async getAllRegisters() {
        return dataSource[this.model].findAll();
    }

    async getOneRegisterById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async createRegister(registerData) {
        return dataSource[this.model].create(registerData);
    }

    async updateRegister(updatedData, id) {
        const listOfUpdatedRegisters = dataSource[this.model].update(updatedData, { where: { id } });

        if (listOfUpdatedRegisters[0] === 0) return false;
        return true;
    }

    async deleteRegister(id) {
        return dataSource[this.model].destroy({ where: { id } });
    }
}

module.exports = Services;