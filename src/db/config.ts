import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { UserAddress } from "../models/userAddress";
import { Product } from "../models/product";
import dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
    models: [User, UserAddress, Product],
    ...(process.env.NODE_ENV === "production" && {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }),
});

export default connection;