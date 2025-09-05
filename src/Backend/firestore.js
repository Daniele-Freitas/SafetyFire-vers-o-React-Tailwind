// const admin = require("./serviceAccountKey.json"); // Firebase Admin SDK

// // Função para criar um pedido no Firestore
// async function createOrder(customerData, cart) {
//   try {
//     const db = admin.firestore();
//     const orderRef = db.collection("orders").doc();

//     const orderData = {
//       ...customerData, // Todos os dados do formulário
//       customerId: customerData.userId,
//       items: cart.map(item => ({
//         productId: item.id || item.product_sku,
//         name: item.name || "",
//         price: item.price || 0,
//         quantity: item.quantity || item.product_qty,
//       })),
//       total: cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || item.product_qty), 0),
//       status: "Pendente",
//       payment_link: "", // Será preenchido depois
//       createdAt: admin.firestore.FieldValue.serverTimestamp()
//     };

//     await orderRef.set(orderData);

//     console.log("✅ Pedido salvo no Firestore com sucesso.");
//     return orderRef.id;
//   } catch (error) {
//     console.error("🚨 Erro ao salvar pedido no Firestore:", error);
//     throw error;
//   }
// }

// module.exports = { createOrder };
