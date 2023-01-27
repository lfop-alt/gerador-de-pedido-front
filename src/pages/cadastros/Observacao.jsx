import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useFormContext } from 'react-hook-form';
import { Box, TextField } from '@mui/material';

export default function Observacoes() {
  const { register } = useFormContext();

  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12}>
          <TextField
            id="financial-observation"
            name="financialObservation"
            label="Observação Financeiro"
            rows={2}
            fullWidth
            multiline
            {...register('financialObservation')}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            id="accounting-observation"
            name="accountingObservation"
            label="Observação Contabil"
            fullWidth
            rows={2}
            multiline
            {...register('accountingObservation')}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            id="installation-note"
            name="installationNote"
            label="Observação de Instalação"
            fullWidth
            rows={2}
            multiline
            {...register('installationNote')}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
