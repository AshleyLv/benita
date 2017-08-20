import {Sequelize, slDB} from '../db/sequelize-mysql2';

export const Task = slDB.define('Task', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    desc: {
        type: Sequelize.TEXT,
        allowNull: false
    }

}, {
    tableName: 'task',
    timestamps: false,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
