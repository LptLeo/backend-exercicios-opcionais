import { Router } from 'express';

import OrderController from '../controllers/OrderController.js';

const routes = Router();

routes.post('/orders', OrderController.createOrder);

routes.get('/orders', OrderController.getAllOrders);

routes.get('/orders/:id', OrderController.getOrderById);

export default routes;
