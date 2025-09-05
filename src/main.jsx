import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { PopupProvider } from './context/PopUpContext.tsx'; // Certifique-se de importar


import MainLayout from './Layouts/MainLayout.jsx';

import Home from './Rotas/home.jsx';
import Empresa from './Rotas/empresa.jsx';
import Produtos from './Rotas/produtos.jsx';
import Servicos from './Rotas/servicos.jsx';
import Contato from './Rotas/contato.jsx';
import ProductDetails from './Rotas/ProductDetails.jsx';
import Cadastro from './Rotas/cadastro.tsx';
import Login from './Rotas/login.tsx';
import ForgotPassword from './Rotas/forgot-password.tsx';
import Popup from './Componentes/PopUp/PopUp.tsx';
import MeusPedidos from './Rotas/meus-pedidos.jsx';
import PaginaNaoEncontrada from './Rotas/PaginaNaoEncontrada.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <PopupProvider>
          <Popup />
          <BrowserRouter>
            <Routes>
              {/* Rota para o Layout Principal */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="empresa" element={<Empresa />} />
                <Route path="servicos" element={<Servicos />} />
                <Route path="produtos" element={<Produtos />} />
                <Route path="produtos/:productId" element={<ProductDetails />} />
                <Route path="contato" element={<Contato />} />
                <Route path="meus-pedidos" element={<MeusPedidos />} />
                <Route path="*" element={<PaginaNaoEncontrada />} />
              </Route>
              
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/recuperar-senha" element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
        </PopupProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);