import { Box, Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Appbar from '../../components/Appbar/Appbar';
import api from '../../services/axios';

export default function EditarProduto() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      commercialDescription: '',
      productCode: '',
      name: '',
    },
  });
  useEffect(() => {
    async function getDataProducto() {
      const { data } = await api.get(`/api/product/${id}`);

      setValue('commercialDescription', data.commercialDescription);
      setValue('productCode', data.productCode);
      setValue('name', data.name);
    }
    getDataProducto();
  }, []);

  const onSubmit = async (data) => {
    try {
      await api.put(`api/product/${id}`, data);

      navigate('/produtos');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box
      sx={{
        padding: '0 20px',
        marginLeft: { md: '240px', xs: '5px' },

        marginTop: '90px',
      }}
    >
      <Appbar />
      <Box
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'Roboto',
          color: '#fff',
          background: '#3d3d3d',
          marginBottom: '40px',
        }}
      >
        <h1>Editar Produto</h1>
      </Box>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid xs={12} md={6}>
          <Controller
            name="productCode"
            control={control}
            render={({ field }) => (
              <TextField
                id="codigo-produto"
                label="Codigo do Produto"
                variant="outlined"
                helperText="Digite o Codigo do Novo Produto"
                fullWidth
                autoFocus
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Controller
            name="commercialDescription"
            control={control}
            render={({ field }) => (
              <TextField
                id="descricao-produto"
                label="Descrição do Produto"
                variant="outlined"
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                id="nome-produto"
                label="Nome do Produto"
                variant="outlined"
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
      <ToastContainer position="top-center" />
    </Box>
  );
}
