import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import CadastrarProduto from "../pages/CadastrarProdutos";
import CadastrarPedidos from "../pages/cadastros/cadastrarPedidos";
import Pedido from "../pages/Pedidos";
import Produtos from "../pages/Produtos";
import EditarProduto from "../pages/EditarProdutos";
import EditarPedido from "../pages/EditarPedido";
import Login from "../pages/Login";
import { isAuthenticated } from "../services/auth";

export default function AplicationRouters() {
  function PrivateRoute({ children }) {
    const isAuthenticate = isAuthenticated();
    return isAuthenticate ? children : <Navigate to="/login" />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Pedido />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/pedidos"
          element={
            <PrivateRoute>
              <Pedido />
            </PrivateRoute>
          }
        />
        <Route
          path="/cadastro/pedido"
          element={
            <PrivateRoute>
              <CadastrarPedidos />
            </PrivateRoute>
          }
        />
        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Produtos />
            </PrivateRoute>
          }
        />
        <Route
          path="/produto/cadastro"
          element={
            <PrivateRoute>
              <CadastrarProduto />
            </PrivateRoute>
          }
        />
        <Route
          path="/produto/edit/:id"
          element={
            <PrivateRoute>
              <EditarProduto />
            </PrivateRoute>
          }
        />
        <Route
          path="/pedido/edit/:id"
          element={
            <PrivateRoute>
              <EditarPedido />
            </PrivateRoute>
          }
        />
        <Route path="/pedido/edit/:id" element={<EditarPedido />} />
      </Routes>
    </Router>
  );
}
