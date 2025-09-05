// import { saveOrderToFirestore } from "./firestore.js";
// import fetch from "node-fetch";

// export async function processCheckout(req, res) {
//   try {
//     const orderData = req.body;

//     if (!orderData.products || orderData.products.length === 0) {
//       return res.status(400).json({ success: false, message: "Carrinho vazio." });
//     }

//     // Salva pedido no Firestore
//     await saveOrderToFirestore(orderData);

//     // Envia pedido para Appmax
//     const appmaxResponse = await fetch("https://admin.appmax.com.br/api/v3/customer", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Appmax-Access-Token": process.env.APPMAX_API_KEY, // Usando variável de ambiente
//       },
//       body: JSON.stringify(orderData),
//     });

//     const result = await appmaxResponse.json();

//     if (!appmaxResponse.ok) {
//       return res.status(500).json({ success: false, message: result.message });
//     }

//     res.status(200).json({ success: true, redirectUrl: result.data.checkout_url });
//   } catch (error) {
//     console.error("Erro no processCheckout:", error);
//     res.status(500).json({ success: false, message: "Erro no servidor." });
//   }
// }
