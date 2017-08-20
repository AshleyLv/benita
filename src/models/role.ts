import {Sequelize, slDB} from '../db/sequelize-mysql2';

export const Role = slDB.define('Role', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: Sequelize.STRING(20),
        allowNull: false
    }

}, {
    tableName: 'role',
    timestamps: false,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
