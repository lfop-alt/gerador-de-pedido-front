import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useFormContext, Controller } from "react-hook-form";
import { Box, TextField } from "@mui/material";

export default function Observacoes() {
  const { control } = useFormContext();

  return (
    <Box sx={{ width: "100%", height: "300px" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12}>
          <Controller
            name="financialObservation"
            control={control}
            render={({ field }) => (
              <TextField
                id="financial-observation"
                label="Observação Financeiro"
                rows={2}
                fullWidth
                multiline
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12}>
          <Controller
            name="accountingObservation"
            control={control}
            render={({ field }) => (
              <TextField
                id="accounting-observation"
                label="Observação Contabil"
                fullWidth
                rows={2}
                multiline
                {...field}
              />
            )}
          />
        </Grid>
        <Grid xs={12}>
          <Controller
            name="installationNote"
            control={control}
            render={({ field }) => (
              <TextField
                id="installation-note"
                label="Observação de Instalação"
                fullWidth
                rows={2}
                multiline
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
