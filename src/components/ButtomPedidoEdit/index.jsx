import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, ButtonGroup } from "@mui/material";

import ObservacoesEdit from "../../pages/EditarPedido/Observacao";
import InstalacoesEdit from "../../pages/EditarPedido/Instalacoes";
import ItensEdit from "../../pages/EditarPedido/Itens";
import CobrancaEdit from "../../pages/EditarPedido/Cobranca";

export default function ButtomSelect({ id }) {
  const [button, setButton] = useState("cobranca");

  function buttons(buttonSelect) {
    switch (buttonSelect) {
      case "cobranca":
        return <CobrancaEdit id={id} />;
      case "instalacao":
        return <InstalacoesEdit id={id} />;
      case "observacoes":
        return <ObservacoesEdit />;
      case "itens":
        return <ItensEdit id={id} />;
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
          <Button onClick={() => setButton("itens")}>Itens</Button>
        </ButtonGroup>
      </Box>
      <Box>{buttons(button)}</Box>
    </Box>
  );
}

ButtomSelect.propTypes = {
  tam: PropTypes.number,
};
ButtomSelect.defaultProps = {
  tam: 0,
};
