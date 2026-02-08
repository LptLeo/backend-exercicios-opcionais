const orders = [];

let nextOrderId = 1;

class OrderModel {
  static create(orderData) {
    const newOrder = { id: nextOrderId++, ...orderData, status: 'pendente' };

    orders.push(newOrder);

    return newOrder;
  }

  static findAll() {
    return orders;
  }

  static findById(id) {
    return orders.find((order) => order.id === parseInt(id));
  }
}

export default OrderModel;
