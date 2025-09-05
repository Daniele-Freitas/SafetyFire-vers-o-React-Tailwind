const admin = require('firebase-admin');

// Substitua o caminho abaixo com o caminho real para o seu arquivo JSON
const serviceAccount = require('/Safety Fire/Backend/keysFirebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('Firebase Admin SDK inicializado com sucesso!');

// Exportando o Admin para ser usado em outras partes do código
module.exports = admin;