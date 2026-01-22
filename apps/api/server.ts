import express from 'express'
import UserRoutes from './src/routes/userRoutes.js';

const app = express();
const port = 5000;

//middlewares para interpretar o corpo das requisições como JSON
app.use(express.json());

//Middleware de rotas
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/users', UserRoutes);


app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on porta ${port}`);
});

export { app };