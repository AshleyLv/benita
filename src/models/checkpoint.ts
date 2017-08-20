import {Sequelize, slDB} from '../db/sequelize-mysql2';

export const Checkpoint = slDB.define('Checkpoint', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    targetDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    summary: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    completeDate: {
        type: Sequelize.DATE,
        allowNull: true
    }

}, {
    tableName: 'checkpoint',
    timestamps: false,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
