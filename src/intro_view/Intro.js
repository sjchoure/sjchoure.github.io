import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import SchoolIcon from '@mui/icons-material/School';

const Intro = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Box pl={3} pr={3} sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Grid
            container
            columnSpacing={2}
            direction="row"
            alignItems="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={12} sm={4}>
              <Card disableGutters={true}>
                <CardContent sx={{ pl: 0, pr: 0 }}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    rowSpacing={2}
                  >
                    <Grid
                      item
                      align="center"
                      style={{
                        width: "100%",
                        height: "280px",
                        backgroundImage: `url(https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg)`,
                        backgroundSize: "cover",
                      }}
                      src="https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg"
                    >
                      <Avatar sx={{ width: 100, height: 100 }} />
                      <Box
                        pt={1}
                        sx={{
                          fontFamily: "Lucida Grande",
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        Sourabh Jaywant Choure
                      </Box>
                    </Grid>
                    <Grid item p={1}>
                      <Box sx={{ fontWeight: 700, fontSize: 22}}>Intro</Box>
                      <Box>hey</Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Card>
                <CardContent>Introduction</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Intro;
