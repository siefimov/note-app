import swaggerJsdoc from 'swagger-jsdoc';

export default {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'NoteCraft App API',
            version: '1.0.0',
            description: 'API documentation for the NoteCraft App',
        },
    },
    apis: ['./routes/notebooks.route.mjs', './routes/notes.route.mjs'], // Path to your route files
};
