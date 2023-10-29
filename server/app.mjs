import express, { json } from 'express';
import cors from 'cors';
import { connectDB } from './config/db.mjs';
import router from './routes/index.mjs';

const app = express();

connectDB();

app.use(json())
app.use(cors());
app.use('/api', router);

export default app;
