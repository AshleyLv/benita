import {Sequelize, slDB} from '../db/sequelize-mysql2';

export const Plan = slDB.define('Plan', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    goal: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    tableName: 'plan',
    timestamps: false,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
