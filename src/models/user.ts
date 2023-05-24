import { Table, Model, Column, DataType, HasOne } from "sequelize-typescript";
import { UserAddress } from "./userAddress";
@Table({
    timestamps: true,
    tableName: 'user'
})
export class User extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @HasOne(() => UserAddress)
    address: UserAddress;
}