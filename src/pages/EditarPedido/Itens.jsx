import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Fab, IconButton, TextField } from "@mui/material";
import { Add, DeleteOutline } from "@mui/icons-material";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/axios";

export default function Itens({ id }) {
  const [produtos, setProdutos] = useState([]);
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itensPedido",
  });

  const handleClickAdd = (e) => {
    e.preventDefault();
    append({
      productCode: "",
    });
  };

  useEffect(() => {
    try {
      api
        .get("/api/products")
        .then((respo) => {
          setProdutos(respo.data);
        })
        .catch((err) => {
          console.log("problema");
        });
    } catch (err) {
      console.log("ruim");
    }
  }, []);

  useEffect(() => {
    try {
      api
        .get(`/api/pedido/${id}`)
        .then((respo) => {
          respo.data?.productPedidos.length > fields.length
            ? append(respo.data?.productPedidos)
            : null;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ height: "auto" }}
    >
      {fields.map((field, index) => (
        <Grid
          key={field.id}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ height: "auto" }}
        >
          <Grid xs={12} md={4} lg={2}>
            <TextField
              id="codigoDoProduto"
              label="Código"
              variant="outlined"
              name="codigoDoProduto"
              fullWidth
              {...register(`itensPedido.${index}.productCode`)}
            />
          </Grid>
          <Grid xs={12} md={4} lg={2}>
            <TextField
              id="descricaoDoProduto"
              label="Descrição Comercial"
              variant="outlined"
              name="descricaoDoProduto"
              fullWidth
              {...register(`itensPedido.${index}.commercialDescription`)}
            />
          </Grid>
          <Grid xs={12} md={2} lg={1}>
            <TextField
              id="quantidadeDoProduto"
              label="Quantidade"
              variant="outlined"
              name="quantidadeDoProduto"
              fullWidth
              {...register(`itensPedido.${index}.amountOfProduct`)}
            />
          </Grid>
          <Grid xs={12} md={2} lg={1.5}>
            <TextField
              id="valorUnitarioDoProduto"
              label="Valor de Compra"
              variant="outlined"
              name="valorUnitarioDoProduto"
              fullWidth
              {...register(`itensPedido.${index}.unitPurchasePrice`)}
            />
          </Grid>
          <Grid xs={12} md={3.5} lg={1.5}>
            <TextField
              id="valorTotalDoProduto"
              label="Valor Total de Compra"
              variant="outlined"
              name="valorTotalDoProduto"
              fullWidth
              {...register(`itensPedido.${index}.totalPurchaseAmount`)}
            />
          </Grid>
          <Grid xs={12} md={3.5} lg={1.5}>
            <TextField
              id="valorUnitatioMensalDoProduto"
              label="Valor da Mensalidade"
              variant="outlined"
              name="valorUnitatioMensalDoProduto"
              fullWidth
              {...register(`itensPedido.${index}.monthlyUnitValue`)}
            />
          </Grid>
          <Grid xs={10} md={3.5} lg={1.5}>
            <TextField
              id="valorTotalMensalDoProduto"
              label="Valor Total da Mensalidade"
              variant="outlined"
              name="valorTotalMensalDoProduto"
              fullWidth
              {...register(`itensPedido.${index}.totalMonthlyAmount`)}
            />
          </Grid>
          <Grid
            xs={12}
            md={1}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "4px",
            }}
          >
            <Fab
              color="primary"
              aria-label="add"
              size="medium"
              onClick={() =>
                fields.length === 1
                  ? toast.error("Campo não pode ser removido")
                  : remove(index)
              }
            >
              <DeleteOutline />
            </Fab>
          </Grid>
        </Grid>
      ))}
      <Grid>
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleClickAdd}
          size="medium"
        >
          <Add />
        </Fab>
      </Grid>
    </Grid>
  );
}
