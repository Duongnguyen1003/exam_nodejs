import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();
dotenv.config();
app.use(express.json())

const productRoutes = require('./routes/product')
app.use(cors({ credentials: 'same-origin' }));

app.use("/api", productRoutes);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB Connected")
})

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`)
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})