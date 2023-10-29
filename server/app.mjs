import express, { json } from 'express';
import cors from 'cors';
import { connectDB } from './config/db.mjs';
import router from './routes/index.mjs';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerDef from './swaggerDef.mjs';
import swaggerUi from 'swagger-ui-express';

connectDB();

const app = express();

const options = {
    swaggerDefinition: swaggerDef.definition,
    apis: swaggerDef.apis,
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(json());
app.use(cors());
app.use('/api', router);

export default app;
