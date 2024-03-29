import React from "react";
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
    <Card>
      <CardContent sx={{ pl: 0, pr: 0 }}>
        <Grid container direction="column" justify="center" rowSpacing={2}>
          <Grid
            item
            sx={{
              height: {
                xs: "35vh",
                sm: "60vh",
                md: "50vh",
              },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              background:
                "linear-gradient(0deg, rgba(50,50,50,0.9) 0%, rgba(217,217,217,0) 35%, rgba(255,255,255,0) 100%), url(https://i.pinimg.com/originals/10/83/da/1083da23b62f2b5e91f4be2bbd26f964.gif) bottom",
              backgroundSize: "cover",
            }}
          >
            <Avatar
              sx={{
                width: "15vh",
                height: "15vh",
                border: "0.3vh solid white",
              }}
              src="/mePic.jpeg"
            />
            <Box
              mt={1}
              mb={1}
              pl={1}
              pr={1}
              sx={{
                fontFamily: "Geneva, Verdana, sans-serif",
                color: "white",
                fontSize: "1.5rem",
                background: "rgba(150, 150, 150, 0.2)",
                borderRadius: "20px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(20px)",
                textAlign: "center",
              }}
            >
              Sourabh Jaywant Choure
            </Box>
          </Grid>
          <Grid item p={2}>
            <Box mb={"0.1vh"} sx={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Intro
            </Box>
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
              <LinkedInIcon sx={{ fontSize: 40, color: "#0072b1" }} />
              <GitHubIcon sx={{ fontSize: 40 }} />
              <FacebookIcon sx={{ fontSize: 40, color: "#3b5998" }} />
              <TwitterIcon sx={{ fontSize: 40, color: "#1DA1F2" }} />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
