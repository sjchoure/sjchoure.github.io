import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ProfileDetails from "././Profile_Details";
import AboutMe from "./About_Me";
import Skills from "./Skills";

const Intro = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box px={3} pb={1} sx={{ bgcolor: "#E1E1E1" }}>
        <Grid
          container
          columnSpacing={2}
          direction="row"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} sm={4} md={4} sx={{ padding: { xs: "16px 0px", md: "0px" } }}>
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
  );
};

export default Intro;
