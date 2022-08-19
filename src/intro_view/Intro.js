import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Intro = () => {
  return (
    <>
    <CssBaseline />
    <Container maxWidth={false} disableGutters={true}>
      <Box p={3} sx={{ bgcolor: "#cfe8fc", height: "100vh"}}>
        <Grid container columnSpacing={{xs:2}}>
          <Grid item xs={12} sm={4}>
            <Item>4</Item>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Item>8</Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default Intro;
