import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useDebounce from "../../repositories/useDebounce";

export default function EnderecoPrinc({ handleDead }) {
  const { register, control, setValue } = useFormContext();

  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={12} md={4}>
        <Controller
          name="pipedriveUrl"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="link-pipe"
              label="Pipedrive"
              variant="outlined"
              helperText="Codigo do cliente do Pipedrive."
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <Controller
          name="cnpjFaturamento"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="cnpj_pedido"
              label="CNPJ"
              variant="outlined"
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <Controller
          name="nomeVendedor"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="nomeVendedor"
              label="Nome do Vendedor"
              variant="outlined"
              name="nomeVendedor"
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={12} md={5} lg={6}>
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
      <Grid xs={4} md={4} lg={2}>
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
      <Grid xs={6} md={4} lg={2}>
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
      <Grid xs={6} md={2} lg={2}>
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

      <Grid xs={2} md={2} lg={2}>
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
      <Grid xs={2} md={2} lg={2}>
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
      <Grid xs={4} md={3} lg={3}>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Fidelidade"
          variant="outlined"
          {...register("fidelity")}
        />
      </Grid>
      <Grid xs={4} md={3} lg={3}>
        <Controller
          name="foundationDate"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField
              id="dataOfFundation"
              fullWidth
              label="Data de fundação"
              variant="outlined"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid xs={6} md={3} lg={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Plano</InputLabel>
          <Select
            defaultValue=""
            labelId="plano-select-label"
            id="planos"
            label="Plano"
            name="plano"
            {...register("plano")}
          >
            <MenuItem value="">
              <em>Selecione</em>
            </MenuItem>
            <MenuItem value="lite">Lite</MenuItem>
            <MenuItem value="pró">Pró</MenuItem>
            <MenuItem value="plus">Plus</MenuItem>
            <MenuItem value="premium">Premium</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={6} md={3} lg={3}>
        <FormControl fullWidth>
          <InputLabel id="condicoes-pagamento-select-label">
            Condições de Pagamento
          </InputLabel>
          <Select
            defaultValue=""
            labelId="condicoes-pagamento-select-label"
            id="condicoes-pagamento"
            label="Condições de Pagamento"
            {...register("condiçãoOfPpagament")}
          >
            <MenuItem value="">
              <em>Selecione</em>
            </MenuItem>
            <MenuItem value="12x">12X sem juros</MenuItem>
            <MenuItem value="avista">A Vista</MenuItem>
            <MenuItem value="boleto">Boleto</MenuItem>
            <MenuItem value="bonificado">Bonificado</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={6} md={3} lg={3}>
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
            name="documentoAssinado"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Select
                defaultValue=""
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
