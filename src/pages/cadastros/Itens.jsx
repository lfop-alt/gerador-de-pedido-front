import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Fab, IconButton, TextField, Autocomplete } from '@mui/material';
import { Add, DeleteOutline } from '@mui/icons-material';
import { useFieldArray, useFormContext, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../../services/axios';

export default function Itens({ productsOptions }) {
  const [produtos, setProdutos] = useState([]);
  const [productDescript, setProductDescript] = useState([]);
  const [newProducts, setNewproduct] = useState([]);
  const [productCode, setProductCode] = useState('');
  const { register, control, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'itensPedido',
  });

  // filtrar array de obj
  // var filtrado = array. filter(function(obj) { return obj. marcar == 1; }); Que vai funcionar.

  const handleClickAdd = (e) => {
    e.preventDefault();
    append({
      productCode: '',
    });
  };

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ height: 'auto' }}
    >
      {fields.map((field, index) => (
        <Grid
          key={field.id}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ height: 'auto' }}
        >
          <Grid xs={12} md={4} lg={2}>
            <Controller
              name={`itensPedido.${index}.productCode`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Código"
                  variant="outlined"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid xs={12} md={4} lg={2}>
            <Controller
              name={`itensPedido.${index}.productDescription`}
              control={control}
              render={({ field }) => {
                return (
                  <Autocomplete
                    id="combo-box-demo"
                    options={productsOptions}
                    getOptionLabel={(option) => {
                      return option.commercialDescription;
                    }}
                    sx={{ width: 'auto' }}
                    onChange={(event, value) => {
                      field.onChange(event);
                      setValue(
                        `itensPedido.${index}.productCode`,
                        value.productCode
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        label="Descrição"
                        variant="outlined"
                        fullWidth
                        {...field}
                        {...params}
                      />
                    )}
                  />
                );
              }}
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
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '4px',
            }}
          >
            <Fab
              color="primary"
              aria-label="add"
              size="medium"
              onClick={() =>
                fields.length === 1
                  ? toast.error('Campo não pode ser removido')
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
