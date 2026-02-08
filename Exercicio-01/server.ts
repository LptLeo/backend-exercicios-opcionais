import express, { type Request, type Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'GET Route funcionando corretamente',
  });
});

app.post('/api', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'POST Route funcionando corretamente',
    data: req.body,
  });
});

app.put('/api', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'PUT Route funcionando corretamente',
    data: req.body,
  });
});

app.delete('/api', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'DELETE Route funcionando corretamente',
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT} e recebendo requisições em /api`);
});
