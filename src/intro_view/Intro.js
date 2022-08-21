import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileDetails from "././Profile_Details";
import AboutMe from "./About_Me";
import Skills from "./Skills";

const Intro = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{ bgcolor: "#d9d9d9" }}
      >
        <Box pl={3} pr={3} sx={{ bgcolor: "#E1E1E1", height: "100vh" }}>
          <Grid
            container
            columnSpacing={2}
            direction="row"
            alignItems="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <ProfileDetails />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container direction="row" rowSpacing={2}>
                <Grid item xs={12}>
                  <AboutMe />
                </Grid>
                <Grid item xs={12}>
                  <Skills />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Intro;
