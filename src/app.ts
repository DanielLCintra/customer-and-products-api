import express from "express";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import productRoutes from "./routes/product";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";
import { isCelebrateError } from 'celebrate';

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/", (req, res) => {
    return res.send("Welcome to the Users and Products API!");
});

app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", productRoutes);

app.use((err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
    if (isCelebrateError(err)) {
        const errors = err.details.get('body')?.details.map((detail) => detail.message);
        return res.status(400).json({ error: 'Validation error', details: errors });
    }

    res.status(500).json({ message: err.message });

    next(err);
});

connection
    .sync()
    .then(() => {
        console.log("Database successfully connected");
    })
    .catch((err) => {
        console.log("Error", err);
    });

app.listen(3000, () => {
    console.log("Welcome to the user and products api! working on port 3000");
});