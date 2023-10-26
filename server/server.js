import express, { json } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/index.mjs';

const app = express();
app.use(json());

const PORT_APP = process.env.PORT || 5500;

app.use(cors());
app.use('/api', router);

connect(process.env.DB_CONNECT)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

app.listen(PORT_APP, () => {
    console.log(`Example app listening on port ${PORT_APP}!`);
});
