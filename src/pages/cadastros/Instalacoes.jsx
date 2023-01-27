import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Fab, TextField } from "@mui/material";
import { Add, DeleteOutline } from "@mui/icons-material";
import { useFieldArray, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

export default function Instalacoes() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "installation",
  });

  const handleClickAdd = (e) => {
    e.preventDefault();
    append({
      installationCep: "",
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
          <Grid xs={12} md={4} lg={2}>
            <TextField
              id="outlined-basic"
              name="installationCnpj"
              fullWidth
              label="CNPJ de Instalação"
              variant="outlined"
              {...register(`installation.${index}.instalationCnpj`)}
            />
          </Grid>
          <Grid xs={12} md={4} lg={2}>
            <TextField
              id="outlined-basic"
              name="installationCep"
              fullWidth
              label="CEP"
              variant="outlined"
              {...register(`installation.${index}.installationCep`)}
            />
          </Grid>
          <Grid xs={6} md={4} lg={2}>
            <TextField
              id="address"
              name="installationAddress"
              fullWidth
              label="Endereço"
              variant="outlined"
              {...register(`installation.${index}.address`)}
            />
          </Grid>
          <Grid xs={6} md={2} lg={1}>
            <TextField
              id="installationNumber"
              name="installationNumber"
              fullWidth
              label="Numero"
              variant="outlined"
              {...register(`installation.${index}.installationNumber`)}
            />
          </Grid>
          <Grid xs={5} md={4} lg={2}>
            <TextField
              id="installationBairro"
              name="installationBairro"
              fullWidth
              label="Bairro"
              variant="outlined"
              {...register(`installation.${index}.installationBairro`)}
            />
          </Grid>
          <Grid xs={5} md={3} lg={2}>
            <TextField
              id="installationCity"
              name="installationCity"
              fullWidth
              label="Cidade"
              variant="outlined"
              {...register(`installation.${index}.installationCity`)}
            />
          </Grid>
          <Grid xs={2} md={3} lg={1}>
            <TextField
              id="installationState"
              name="installationState"
              fullWidth
              label="Estado"
              variant="outlined"
              {...register(`installation.${index}.installationState`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={4.5}>
            <TextField
              id="outlined-basic"
              name="corporateName"
              fullWidth
              label="Razão Social"
              variant="outlined"
              {...register(`installation.${index}.corporateName`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={2.5}>
            <TextField
              id="outlined-basic"
              name="ccmInstallation"
              fullWidth
              label="CCM"
              variant="outlined"
              {...register(`installation.${index}.ccmInstallation`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={2.5}>
            <TextField
              id="outlined-basic"
              name="ieInstallation"
              fullWidth
              label="IE"
              variant="outlined"
              {...register(`installation.${index}.ieInstallation`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={2.5}>
            <TextField
              id="outlined-basic"
              name="quantidadeRepInstallation"
              fullWidth
              label="Quantidade de REP"
              variant="outlined"
              {...register(`installation.${index}.quantidadeRepInstallation`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <TextField
              id="outlined-basic"
              name="installationEmail"
              fullWidth
              label="E-mail"
              variant="outlined"
              {...register(`installation.${index}.installationEmail`)}
            />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <TextField
              id="outlined-basic"
              name="installationName"
              fullWidth
              label="Nome"
              variant="outlined"
              {...register(`installation.${index}.installationName`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={2.5}>
            <TextField
              id="outlined-basic"
              name="installationTelFixo"
              fullWidth
              label="Telefone Fixo"
              variant="outlined"
              {...register(`installation.${index}.installationTelFixo`)}
            />
          </Grid>
          <Grid xs={6} md={5} lg={2.5}>
            <TextField
              id="outlined-basic"
              name="installationCel"
              fullWidth
              label="Telefone Celular"
              variant="outlined"
              {...register(`installation.${index}.installationCel`)}
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
