import React, { useState } from "react";
import "@fontsource/roboto/400.css";

import { TextField, Box, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import api from "../../services/axios";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const handleSubmitLogin = async () => {
    try {
      if (!email || !password) {
        return toast.error("E-mail e Senha Incorreto");
      }

      const user = { email, password };
      const response = await api.post("/api/login", user);

      localStorage.setItem("token", response.data.token);
      return navigate("/");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <Box
      sx={{
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          width: "65vh",
          background: "#F0F8FF",
          height: "55vh",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background: "#3d3d3d",
            padding: "30px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <img
            src="https://www.controlid.com.br/assets/images/logo.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "Roboto",
            alignItems: "center",
            height: "20vh",
            marginTop: "60px",
            marginBottom: "30px",
          }}
        >
          <h2>Login</h2>
          <TextField
            label="E-mail"
            name="email"
            variant="outlined"
            fullWidth
            sx={{ width: "450px", marginBottom: "30px" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          >
            E-mail
          </TextField>

          <TextField
            label="Senha"
            name="senha"
            variant="outlined"
            fullWidth
            sx={{ width: "450px", marginBottom: "30px" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          >
            Senha
          </TextField>
        </Box>
        <Box
          sx={{
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" size="large" onClick={handleSubmitLogin}>
            Entrar
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "Roboto",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h4>Caso esqueça a senha, entre em contato com o Administrador</h4>
        </Box>
      </Box>
      <ToastContainer position="top-center" />
    </Box>
  );
}
