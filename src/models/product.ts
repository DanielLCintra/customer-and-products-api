import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "./user";

@Table({
    timestamps: true,
    tableName: 'product'
})
export class Product extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    price!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    image!: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    user_id!: string;

    @BelongsTo(() => User)
    user: User;
}