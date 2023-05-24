import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import { UserAddress } from "../models/userAddress";


require('dotenv').config();

const connection = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
    models: [User, UserAddress],
});

export default connection;