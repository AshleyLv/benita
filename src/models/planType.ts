import {Sequelize, slDB} from '../db/sequelize-mysql';

export const PlanType = slDB.define('PlanType', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: false
    }

}, {
    tableName: 'plan_type',
    timestamps: false,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
