import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProfileDetails = () => {
    return (
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
              style={{
                width: "100%",
                
                backgroundImage: `url(https://i.pinimg.com/originals/10/83/da/1083da23b62f2b5e91f4be2bbd26f964.gif)`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
              sx={{
                height: {
                    xs: "35vh",
                    sm: "60vh",
                    md: "50vh"
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Avatar sx={{ width: "15vh", height: "15vh" }} />
              <Box
                mt={1}
                mb={1}
                pl={1}
                pr={1}
                sx={{
                  fontFamily: "Lucida Grande",
                  color: "white",
                  fontSize: "1.5rem",
                  background: "rgba(150, 150, 150, 0.2)",
                  borderRadius: "20px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(20px)",
                }}
                style={{
                  
                }}
              >
                Sourabh Jaywant Choure
              </Box>
            </Grid>
            <Grid item p={2}>
              <Box sx={{ fontWeight: 700, fontSize: "1.6rem" }}>Intro</Box>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                style={{ color: "#707070" }}
              >
                <SchoolIcon sx={{ fontSize: 19 }} />
                The University of Texas at Dallas
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                style={{ color: "#707070" }}
              >
                <LocationOnIcon sx={{ fontSize: 19 }} />
                Dallas, TX
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                style={{ color: "#707070" }}
              >
                <CallIcon sx={{ fontSize: 19 }} />
                +1 (469)-756-1502
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                style={{ color: "#707070" }}
              >
                <EmailIcon sx={{ fontSize: 19 }} />
                sjchoure@utdallas.edu
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                justifyContent="center"
                pt={2}
              >
                <LinkedInIcon sx={{ fontSize: 35 }} />
                <GitHubIcon sx={{ fontSize: 35 }} />
                <FacebookIcon sx={{ fontSize: 35 }} />
                <TwitterIcon sx={{ fontSize: 35 }} />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
}

export default ProfileDetails;