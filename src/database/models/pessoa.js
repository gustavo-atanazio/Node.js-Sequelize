'use strict';

const { Model } = require('sequelize');
const isValid = require('@app/utils/CPF-helper.js');

module.exports = (sequelize, DataTypes) => {
    class Pessoa extends Model {
        static associate(models) {
            Pessoa.hasMany(models.Curso, { foreignKey: 'docente_id' });
            Pessoa.hasMany(models.Matricula, {
                foreignKey: 'estudante_id',
                scope: { status: 'matriculado' },
                as: 'aulasMatriculadas'
            });
        }
    }

    Pessoa.init({
        nome: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 30],
                    msg: 'Tamanho do nome inválido.'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Formato do email inválido.'
                }
            }
        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                cpfIsValid: (cpf) => {
                    if (!isValid(cpf)) throw new Error('CPF inválido.');
                }
            }
        },
        ativo: DataTypes.BOOLEAN,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Pessoa',
        tableName: 'pessoas',
        paranoid: true,
        defaultScope: {
            where: { ativo: true }
        },
        scopes: {
            allRegisters: {
                where: {}
            }
        }
    });

    return Pessoa;
};