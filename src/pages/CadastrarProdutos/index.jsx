import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Appbar from '../../components/Appbar/Appbar';
import api from '../../services/axios';

export default function CadastrarProduto() {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      commercialDescription: '',
      productCode: '',
      name: '',
    },
  });

  async function onSubmit(data) {
    try {
      await api.post('/api/product', data);

      navigate('/produtos');
    } catch (err) {
      setError(err.message);
      toast.error(error);
    }
  }

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
        <h1>Cadastro de Produto</h1>
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
          <TextField
            id="codigo-produto"
            label="Codigo do Produto"
            variant="outlined"
            helperText="Digite o Codigo do Novo Produto"
            fullWidth
            autoFocus
            {...methods.register('productCode')}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            id="descricao-produto"
            label="Descrição do Produto"
            variant="outlined"
            fullWidth
            {...methods.register('commercialDescription')}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            id="nome-produto"
            label="Nome do Produto"
            variant="outlined"
            fullWidth
            {...methods.register('name')}
          />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={methods.handleSubmit(onSubmit)}
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
      <ToastContainer position="top-center" />
    </Box>
  );
}
