import app from './app.mjs';
import dotenv from 'dotenv';
dotenv.config();

const PORT_APP = process.env.PORT || 5500;

app.listen(PORT_APP, () => {
    console.log(`Example app listening on port ${PORT_APP}!`);
});
