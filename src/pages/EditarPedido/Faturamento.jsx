import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function EnderecoPrinc() {
  const { control } = useFormContext();

  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={12} md={6}>
        <Controller
          name="pipedriveUrl"
          control={control}
          render={({ field }) => (
            <TextField
              id="link-pipe"
              label="Pipedrive"
              variant="outlined"
              name="pipedriveUrl"
              helperText="Codigo do cliente do Pipedrive."
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={12} md={3}>
        <Controller
          name="cnpjFaturamento"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="cnpj_pedido"
              label="CNPJ"
              variant="outlined"
              name="cnpj-pedido"
              helperText="Digite o CNPJ."
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={12} md={3}>
        <Controller
          name="sallerName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="sallerName"
              label="Nome do Vendedor"
              variant="outlined"
              name="sallerName"
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={8} md={8} lg={4}>
        <Controller
          name="billingAddress"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="Endereço"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={4} md={4} lg={1}>
        <Controller
          name="billingAddressNumber"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="Numero"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={4} lg={4}>
        <Controller
          name="billingDistrict"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="Bairro"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={3} lg={2}>
        <Controller
          name="billingCity"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="Cidade"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={2} lg={1}>
        <Controller
          name="billingState"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="Estado"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={3} lg={2}>
        <Controller
          name="billingCep"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="CEP"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={12} md={5} lg={4}>
        <Controller
          name="corporateName"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="Razão Social"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={2} md={2} lg={1}>
        <Controller
          name="ccm"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="CCM"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={2} md={2} lg={1}>
        <Controller
          name="ie"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="IE"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={4} md={3} lg={2}>
        <Controller
          name="fidelity"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              fullWidth
              label="Fidelidade"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={4} md={3} lg={2}>
        <Controller
          name="foundationDate"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="foundationDate"
              fullWidth
              label="Data de fundação"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={3} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Plano</InputLabel>
          <Controller
            name="plano"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Select
                labelId="plano-select-label"
                id="planos"
                label="Plano"
                {...field}
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="lite">Lite</MenuItem>
                <MenuItem value="pró">Pró</MenuItem>
                <MenuItem value="plus">Plus</MenuItem>
                <MenuItem value="premium">Premium</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Grid>
      <Grid xs={6} md={3} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="condicoes-pagamento-select-label">
            Condições de Pagamento
          </InputLabel>
          <Controller
            name="condiçãoOfPpagament"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Select
                labelId="condicoes-pagamento-select-label"
                id="condicoes-pagamento"
                label="Condições de Pagamento"
                {...field}
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="12x">12X sem juros</MenuItem>
                <MenuItem value="avista">A Vista</MenuItem>
                <MenuItem value="boleto">Boleto</MenuItem>
                <MenuItem value="bonificado">Bonificado</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Grid>
      <Grid xs={6} md={3} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="condicoes-serasa-select-label">
            Condições Serasa
          </InputLabel>
          <Controller
            name="serasaConditions"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Select
                defaultValue="boa"
                labelId="condicoes-serasa-select-label"
                id="condicoes-serasa"
                name="serasaConditions"
                label="Condições Serasa"
                {...field}
              >
                <MenuItem value="boa">Boa</MenuItem>
                <MenuItem value="ruim">Ruim</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Grid>
      <Grid xs={6} md={2} lg={2}>
        <Controller
          name="numberOfCollaborators"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="numberOfCollaborators"
              fullWidth
              label="Funcionario"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={2} lg={2}>
        <Controller
          name="equipamentNumber"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="equipamentNumber"
              fullWidth
              label="Equipamento"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={3} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="doc-assinado-select-label">
            Assinado Digitalmente
          </InputLabel>
          <Controller
            name="digitallySigned"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Select
                labelId="doc-assinado-select-label"
                id="doc-assinado"
                label="Assinado Digitalmente"
                {...field}
              >
                <MenuItem value="sim">Sim</MenuItem>
                <MenuItem value="nao">Não</MenuItem>
              </Select>
            )}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
