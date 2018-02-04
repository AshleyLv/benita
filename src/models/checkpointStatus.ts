import {Sequelize, slDB} from '../db/sequelize-mysql';

export const CheckpointStatus = slDB.define('CheckpointStatus', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }

}, {
    tableName: 'checkpoint_status',
    timestamps: false,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});
