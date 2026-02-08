import OrderModel from '../models/OrderModel.js';

class OrderService {
  static createOrder(orderData) {
    if (!orderData.item || !orderData.quantity) {
      throw new Error('Item e quantidade são obrigatórios para o pedido');
    }

    return OrderModel.create(orderData);
  }

  static getAllOrders() {
    return OrderModel.findAll();
  }

  static getOrderById(id) {
    const order = OrderModel.findById(id);

    if (!order) {
      throw new Error('Pedido não encontrado.');
    }

    return order;
  }
}

export default OrderService;
