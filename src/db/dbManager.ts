import {User} from '../models/user';
import {Role} from '../models/role';
import {slDB} from './sequelize-mysql2';
import {Plan} from '../models/plan';
import {PlanType} from '../models/planType';
import {DailySet} from '../models/dailySet';
import {TaskStatus} from '../models/taskStatus';
import {Task} from '../models/task';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointStatus} from '../models/checkpointStatus';

export class DbManager {
    public static createDBTables(): void {
        DbManager.setupTableRelationships();
        slDB.sync({force: false}).then(() => {
            console.log('Database structure sync done!');
        }).catch((error) => {
            console.log(error);
        });
    }

    private static setupTableRelationships(): void {
        User.belongsToMany(Role, {through: 'user_role_rel', timestamps: false});
        Role.belongsToMany(User, {through: 'user_role_rel', timestamps: false});

        User.hasMany(Plan, {foreignKey: 'created_by'});
        Plan.belongsTo(User, {foreignKey: 'created_by'});

        PlanType.hasMany(Plan, {foreignKey: 'type'});
        Plan.belongsTo(PlanType, {foreignKey: 'type'});

        Plan.hasMany(DailySet, {foreignKey: 'plan_id'});
        DailySet.belongsTo(Plan, {foreignKey: 'plan_id'});

        DailySet.hasMany(Task, {foreignKey: 'daily_set_id'});
        Task.belongsTo(DailySet, {foreignKey: 'daily_set_id'});

        TaskStatus.hasMany(Task, {foreignKey: 'status'});
        Task.belongsTo(TaskStatus, {foreignKey: 'status'});

        Plan.hasMany(Checkpoint, {foreignKey: 'plan_id'});
        Checkpoint.belongsTo(Plan, {foreignKey: 'plan_id'});

        CheckpointStatus.hasMany(Checkpoint, {foreignKey: 'status'});
        Checkpoint.belongsTo(CheckpointStatus, {foreignKey: 'status'});
    }
}
