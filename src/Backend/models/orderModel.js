const admin = require('../utils/firebaseAdmin');
const db = admin.firestore();

class Order {
  static async createOrder(userId, products, paymentInfo) {
    const orderRef = db.collection('orders').doc(); // Cria um novo pedido
    const orderData = {
      userId,
      products,
      paymentInfo,
      status: 'pending', // Status inicial
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    await orderRef.set(orderData);
    return orderRef.id;
  }

  static async getOrder(orderId) {
    const orderRef = db.collection('orders').doc(orderId);
    const orderSnapshot = await orderRef.get();
    if (!orderSnapshot.exists) {
      throw new Error('Pedido não encontrado');
    }
    return orderSnapshot.data();
  }

  // Você pode adicionar mais métodos aqui, como atualização de status, etc.
}

module.exports = Order;
