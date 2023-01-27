import React, { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";

import Itens from "../../pages/cadastros/Itens";
import Instalacoes from "../../pages/cadastros/Instalacoes";
import Observacoes from "../../pages/cadastros/Observacao";
import Cobranca from "../../pages/cadastros/Cobranca";

export default function ButtomSelect({ productsOptions }) {
  const [button, setButton] = useState("cobranca");

  function buttons(buttonSelect) {
    switch (buttonSelect) {
      case "cobranca":
        return <Cobranca />;
      case "instalacao":
        return <Instalacoes />;
      case "observacoes":
        return <Observacoes />;
      case "itens":
        return <Itens productsOptions={productsOptions} />;
      default:
        return null;
    }
  }

  return (
    <Box>
      <Box
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          "& > *": {
            mt: 2,
            mb: 4,
          },
        }}
      >
        <ButtonGroup
          variant="outlined"
          size="large"
          aria-label="text button group"
        >
          <Button onClick={() => setButton("cobranca")}>Cobrança</Button>
          <Button onClick={() => setButton("instalacao")}>Instalação</Button>
          <Button onClick={() => setButton("observacoes")}>Observações</Button>
          <Button onClick={() => setButton("itens")}>Produtos</Button>
        </ButtonGroup>
      </Box>
      <Box>{buttons(button)}</Box>
    </Box>
  );
}
