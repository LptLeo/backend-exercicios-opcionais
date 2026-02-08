import OrderService from '../services/OrderService.js';

class OrderController {
  static async createOrder(req, res) {
    try {
      const newOrder = await OrderService.createOrder(req.body);

      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar pedido.' });
    }
  }

  static async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);

      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default OrderController;
