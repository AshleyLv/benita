import {Sequelize, slDB} from '../db/sequelize-mysql2';

export const DailySet = slDB.define('DailySet', {
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
    }

}, {
    tableName: 'daily_set',
    timestamps: false,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
