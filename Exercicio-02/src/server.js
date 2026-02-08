import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/orderRoutes.js';

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo(a) à API de Pedidos da Cafeteria (ES Modules)!');
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(
    `API de Pedidos disponível em http://localhost:${PORT}/api/orders`,
  );
});
