import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = () => {
    try {
        mongoose.connect(process.env.DB_CONNECT);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }

    const dbConnection = mongoose.connection;

    dbConnection.once('open', () => {
        console.log(`Database connected!`);
    });

    dbConnection.on('error', (err) => {
        console.error(`Connection error: ${err}`);
    });
};
