import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import {User} from './user'; 
@Table({
    tableName: 'user_address', // Replace with your desired table name
    timestamps: true,
})
export class UserAddress extends Model<UserAddress> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    zipcode: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    state: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    street: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    city: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    number: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    user_id: string;

    @BelongsTo(() => User)
    user: User;
}