import React, { useState, useEffect } from "react";
import { Box, Button, Divider } from "@mui/material";

import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../../services/axios";

import EnderecoPrinc from "./Faturamento";
import Appbar from "../../components/Appbar/Appbar";
import ButtomSelectEdit from "../../components/ButtomPedidoEdit";

export default function CadastrarPedidos() {
  const [errors, setError] = useState();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      cnpjFaturamento: "",
      pipedriveUrl: "",
      nomeVendedor: "",
      billingAddress: "",
      billingState: "",
      billingAddressNumber: "",
      billingDistrict: "",
      billingCity: "",
      corporateName: "",
      billingCep: "",
      ccm: "",
      ie: "",
      fidelity: "",
      foundationDate: "",
      plano: "",
      condiçãoOfPpagament: "",
      serasaConditions: "",
      numberOfCollaborators: "",
      equipamentNumber: "",
      digitallySigned: "",
      emailDeCobranca: "",
      nomeDeCobranca: "",
      telephone: "",
      celularDeCobranca: "",
      financialObservation: "",
      accountingObservation: "",
      installationNote: "",
      statusClient: "",
      sallerName: "",
    },
  });

  const { id } = useParams();

  useEffect(() => {
    try {
      api
        .get(`/api/pedido/${id}`)
        .then((respo) => {
          methods.setValue("corporateName", respo.data.corporateName);
          methods.setValue("pipedriveUrl", "12234");
          methods.setValue("sallerName", respo.data.sallerName);
          methods.setValue("cnpjFaturamento", respo.data.cnpj);
          methods.setValue("telephone", respo.data.telephone);
          methods.setValue(
            "numberOfCollaborators",
            respo.data.numberOfCollaborators
          );
          methods.setValue("equipamentNumber", respo.data.equipamentNumber);
          methods.setValue("billingAddress", respo.data.billingAddress);
          methods.setValue(
            "billingAddressNumber",
            respo.data.billingAddressNumber
          );
          methods.setValue("billingDistrict", respo.data.billingDistrict);
          methods.setValue("billingCity", respo.data.billingCity);
          methods.setValue("billingState", respo.data.billingState);
          methods.setValue("billingCountry", respo.data.billingCountry);
          methods.setValue("billingCep", respo.data.billingCep);
          methods.setValue(
            "financialObservation",
            respo.data.financialObservation
          );
          methods.setValue("accountingObservation", respo.data.noteForInvoice);
          methods.setValue(
            "installationNote",
            respo.data.observationInstallation
          );
          methods.setValue("ccm", respo.data.ccm);
          methods.setValue("ie", respo.data.ie);
          methods.setValue("digitallySigned", respo.data.digitallySigned);
          methods.setValue(
            "digitallySignedLink",
            respo.data.digitallySignedLink
          );
          methods.setValue("plano", respo.data.customerPlan);
          methods.setValue(
            "condiçãoOfPpagament",
            respo.data.productPaymentTerms
          );
          methods.setValue("serasaConditions", respo.data.serasaConditions);
          methods.setValue("fidelity", respo.data.fidelity);
          methods.setValue("foundationDate", respo.data.foundationDate);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  async function onSubmit(data) {
    try {
      console.log(data);
      await api.put(`/api/pedido/${id}`, data);
      navigate("/pedidos");
    } catch (err) {
      setError(err.message);
      toast.error(errors);
    }
  }

  return (
    <FormProvider {...methods}>
      <Appbar />
      <Box
        sx={{
          marginLeft: { md: "240px", xs: "20px" },
          padding: "0 20px",
          marginTop: "90px",
        }}
      >
        <Box
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Roboto",
            color: "#fff",
            background: "#3d3d3d",
            marginBottom: "40px",
          }}
        >
          <h1>Editar Pedido</h1>
        </Box>
        <Divider sx={{ marginBottom: "40px" }} />
        <EnderecoPrinc planoPo={methods.getValues("plano")} />
        <Divider sx={{ marginTop: "40px" }} />

        <Box>
          <ButtomSelectEdit id={id} />
        </Box>
        <Box
          sx={{
            height: "auto",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <Button variant="contained" onClick={methods.handleSubmit(onSubmit)}>
            Salvar
          </Button>
        </Box>

        <ToastContainer position="top-center" />
      </Box>
    </FormProvider>
  );
}
