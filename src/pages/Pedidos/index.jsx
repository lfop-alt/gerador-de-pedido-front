import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Edit, PictureAsPdf } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import download from "downloadjs";

import api from "../../services/axios";

import Appbar from "../../components/Appbar/Appbar";

export default function Home() {
  const [pedidos, setPedidos] = useState([]);
  const [errors, setError] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get("/api/pedido");
        setPedidos(response.data);
      } catch (err) {
        setError(err.message);
        toast.error(errors);
      }
    }
    getData();
  }, []);

  async function handlepedidoPdf(id) {
    try {
      const response = await api.get(`/api/pedido/download/${id}`, {
        responseType: "blob",
      });

      download(response.data, "pedido.pdf");
    } catch (err) {
      setError(err.message);
      toast.error(errors);
    }
  }

  return (
    <Box
      sx={{
        padding: "0 20px",
        marginLeft: { md: "240px", xs: "5px" },
        marginTop: "90px",
      }}
    >
      <Appbar />
      <Box
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Roboto",
          color: "#fff",
          background: "#3d3d3d",
          marginBottom: "30px",
        }}
      >
        <h1>Pedidos</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
          textDecoration: "none",
        }}
      >
        <Link to="/cadastro/pedido" style={{ textDecoration: "none" }}>
          <Button variant="contained">Cadastrar</Button>
        </Link>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ height: "50px" }}>
              <TableCell
                align="center"
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              >
                CNPJ
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Razão Social
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Data de Criação
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "18px" }}>
                Editar
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "18px" }}>
                Baixar PDF
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pedidos.map((pedido) => (
              <TableRow
                key={pedido.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "50px",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "16px" }}
                  align="center"
                  key={pedido.id}
                >
                  {pedido.cnpj}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  {pedido.corporateName}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  {pedido.createdAt}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  <Link to={`/pedido/edit/${pedido.id}`}>
                    <IconButton aria-label="edit">
                      <Edit />
                    </IconButton>
                  </Link>
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "16px" }}>
                  <IconButton
                    aria-label="pdf"
                    onClick={() => {
                      handlepedidoPdf(pedido.id);
                    }}
                  >
                    <PictureAsPdf />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ToastContainer position="top-center" />
    </Box>
  );
}
