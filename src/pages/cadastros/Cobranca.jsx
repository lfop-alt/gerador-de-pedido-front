import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Fab, TextField } from "@mui/material";
import { Add, DeleteOutline } from "@mui/icons-material";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

export default function Instalacoes() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cobranca",
  });

  const handleClickAdd = (e) => {
    e.preventDefault();
    append({
      cnpjCobranca: "",
    });
  };

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: "100%", height: "auto" }}
    >
      {fields.map((field, index) => (
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ width: "100%", height: "auto" }}
          key={field.id}
        >
          <Grid xs={12} md={6} lg={2}>
            <TextField
              id="outlined-basic"
              name="cnpjCobranca"
              fullWidth
              label="CNPJ de Cobrança"
              variant="outlined"
              {...register(`cobranca.${index}.cnpjCobranca`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <TextField
              id="outlined-basic"
              name="corporateNameCobranca"
              fullWidth
              label="Razão Social"
              variant="outlined"
              {...register(`cobranca.${index}.corporateNameCobranca`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <TextField
              id="address"
              name="AddressCobranca"
              fullWidth
              label="Endereço"
              variant="outlined"
              {...register(`cobranca.${index}.AddressCobranca`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={1}>
            <TextField
              id="ccmCobranca"
              name="ccmCobranca"
              fullWidth
              label="CCM"
              variant="outlined"
              {...register(`cobranca.${index}.ccmCobranca`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={1}>
            <TextField
              id="ieCobranca"
              name="ieCobranca"
              fullWidth
              label="IE"
              variant="outlined"
              {...register(`cobranca.${index}.ieCobranca`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <TextField
              id="emailCobranca"
              name="emailCobranca"
              fullWidth
              label="E-mail"
              variant="outlined"
              {...register(`cobranca.${index}.emailCobranca`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <TextField
              id="nameCobranca"
              name="nameCobranca"
              fullWidth
              label="Nome"
              variant="outlined"
              {...register(`cobranca.${index}.nameCobranca`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={2.5}>
            <TextField
              id="telFixoCobranca"
              name="telFixoCobranca"
              fullWidth
              label="Telefone Fixo"
              variant="outlined"
              {...register(`cobranca.${index}.telFixoCobranca`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={2.5}>
            <TextField
              id="celularCobranca"
              name="celularCobranca"
              fullWidth
              label="Telefone Celular"
              variant="outlined"
              {...register(`cobranca.${index}.celularCobranca`)}
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
