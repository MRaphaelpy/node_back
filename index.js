import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.listen(port, () => {
    console.log("Yasmim? que Yasmim?");
});
//https://http.cat/[status_code]