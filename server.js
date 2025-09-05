// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";
// import admin from "firebase-admin";
// import dotenv from "dotenv";
// import fs from "fs";

// dotenv.config({ path: ".env" });

// const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// });

// const db = admin.firestore();
// const app = express();

// app.use(cors());
// app.use(express.json());

// const SANDBOX_API_KEY_APPMAX = process.env.SANDBOX_API_KEY_APPMAX;

// // 🔹 Função para verificar ou criar cliente na AppMax
// async function getOrCreateCustomer(customerData) {
//     const { email, telephone, firstname, lastname, document } = customerData;

//     const response = await fetch("https://homolog.sandboxappmax.com.br/api/v3/customer", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             "access-token": SANDBOX_API_KEY_APPMAX,
//             firstname,
//             lastname,
//             email,
//             telephone,
//             document
//         })
//     });

//     const data = await response.json();

//     console.log("🔎 Resposta da criação de cliente:", JSON.stringify(data, null, 2)); // ESSENCIAL!
    
//     if (!data.success || !data.data || data.data.length === 0) {
//         throw new Error("Erro ao criar cliente na AppMax");
//     }

//     return data.data.id;
// }

// // 🔹 Rota para processar o checkout
// app.post("/checkout", async (req, res) => {
//     try {
//         const orderData = req.body;
//         console.log("📩 Dados recebidos no checkout:", JSON.stringify(orderData, null, 2));

//         // 1️⃣ Criar cliente
//         console.log("🔍 Criando cliente na AppMax...");
//         const customer_id = await getOrCreateCustomer(orderData.customer);
//         console.log("✅ Cliente criado:", customer_id);

//         // 2️⃣ Criar pedido
//         const pedidoPayload = {
//             "access-token": SANDBOX_API_KEY_APPMAX,
//             customer_id,
//             external_order_id: orderData.userId,
//             total: orderData.totalAmount,
//             address_street: orderData.customer.address_street,
//             address_street_number: orderData.customer.address_street_number,
//             address_street_complement: orderData.customer.address_street_complement,
//             address_street_district: orderData.customer.address_street_district,
//             address_city: orderData.customer.address_city,
//             address_state: orderData.customer.address_state,
//             postcode: orderData.customer.postcode,
//             ip: orderData.customer.ip,
//             custom_txt: orderData.items.map(item => `${item.name} (${item.quantity}x)`).join(", "),
//             products: orderData.items.map(item => ({
//                 sku: item.id,
//                 qty: item.quantity,
//                 name: item.name
//             }))
//         };

//         console.log("📦 Enviando pedido:", JSON.stringify(pedidoPayload, null, 2));

//         const response = await fetch("https://homolog.sandboxappmax.com.br/api/v3/order", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "access-token": SANDBOX_API_KEY_APPMAX
//             },
//             body: JSON.stringify(pedidoPayload)
//         });

//         const appmaxOrder = await response.json();
//         console.log("🔍 Resposta da AppMax:", appmaxOrder);

//         if (!appmaxOrder.success) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Erro ao criar pedido na AppMax",
//                 appmaxOrder
//             });
//         }

//         // 3️⃣ Salvar pedido no Firestore
//         await db.collection("orders").add({
//             ...orderData,
//             appmax_order_id: appmaxOrder.order_id,
//             payment_link: appmaxOrder.checkout_url,
//             createdAt: new Date()
//         });

//         // 4️⃣ Redirecionar para pagamento
//         res.json({ success: true, redirectUrl: appmaxOrder.checkout_url });

//     } catch (error) {
//         console.error("🚨 Erro no checkout:", error);
//         res.status(500).json({ success: false, message: "Erro interno no servidor" });
//     }
// });

// console.log("🔐 Token usado:", process.env.SANDBOX_API_KEY_APPMAX);

// // 🚀 Inicia o servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


//o servidor já esta funcionando normalmente, apenas será necessario atualizar o token de acesso quando for para produção,
//como também acredito que seja mais facil aplicar o resto dos codigos da api aqui, ou fazer uma modularização mais avançada
//a pasta vendor do php não está incluida no arquivo local, mas ela foi instalada diretamente no servidor via SHH
//cabe lembrar que o composer que está funcionanado com o projeto é o composer 2, que está instalado na pasta individual do projeto na hostinger
