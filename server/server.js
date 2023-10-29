import app from './app.mjs';
import dotenv from 'dotenv';
// import sitemap from 'express-sitemap-html'

// sitemap.swagger('TODO App - API DOCS', app)
dotenv.config();

const PORT_APP = process.env.PORT || 5500;

app.listen(PORT_APP, () => {
    console.log(`Example app listening on port ${PORT_APP}!`);
});
