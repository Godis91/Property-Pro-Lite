import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import authenticationRouter from './Routes/authentication.routes';
import propertyRouter from './Routes/property.routes';
import swaggerDocument from '../swagger.json';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('You are welcome to Property Pro Lite ');
});
app.use('/api/v1/auth/', authenticationRouter);
app.use('/api/v1/property/', propertyRouter);

const port = process.env.PORT || 5000;

const server = app.listen(port, console.log(`server is up on port ${port}`));

export default appServer;
