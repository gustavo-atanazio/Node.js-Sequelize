const dataSource = require('@app/database/models');

class Services {
    constructor(modelName) { this.model = modelName; }

    async getAllRegisters(where = {}) {
        return dataSource[this.model].findAll({ where: { ...where } });
    }

    async getRegistersByScope(scope) {
        return dataSource[this.model].scope(scope).findAll();
    }

    async getOneRegisterById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async getOneRegister(where) {
        return dataSource[this.model].findOne({ where: { ...where } });
    }

    async getAndCountRegisters(options) {
        return dataSource[this.model].findAndCountAll({ ...options });
    }

    async createRegister(registerData) {
        return dataSource[this.model].create(registerData);
    }

    async updateRegister(updatedData, where, transaction = {}) {
        const listOfUpdatedRegisters = dataSource[this.model].update(updatedData, {
            where: { ...where },
            transaction
        });

        if (listOfUpdatedRegisters[0] === 0) return false;
        return true;
    }

    async deleteRegister(id) {
        return dataSource[this.model].destroy({ where: { id } });
    }
}

module.exports = Services;