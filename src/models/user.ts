import {Sequelize, slDB} from '../db/sequelize-mysql';

export const User = slDB.define('User', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ip: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    udid: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    }

}, {
    tableName: 'user',
    timestamps: true,
    underscored: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [
        {
            name: 'USER_IDX_1',
            method: 'BTREE',
            fields: ['username']
        }
    ]
});
