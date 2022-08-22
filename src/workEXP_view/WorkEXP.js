import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const WorkEXP = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{ bgcolor: "#d9d9d9" }}
    >
      <Box sx={{ bgcolor: "#E1E1E1" }}>
        <Grid
          direction="row"
          container
          alignItems="space-around"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
          rowSpacing={0}
          gap={0}
        >
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            sm={12}
            md={10}
            lg={10}
            sx={{
              width: "100vw",
            }}
          >
            <Box mb={"0.1vh"} sx={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Work Experience
            </Box>
          </Grid>
          <Grid item sm={12} md={10} lg={10} sx={{ width: "100vw" }}>
            <Timeline
              position={matches ? "alternate" : "right"}
              sx={{ justifyContent: "center" }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <FastfoodIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    flex: { lg: "1", md: "1", xs: "100%" },
                  }}
                >
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="span">
                        Meta (Facebook)
                      </Typography>
                      <Typography>...</Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    flex: { lg: "1", md: "1", xs: "100%" },
                  }}
                >
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="span">
                        Meta (Facebook)
                      </Typography>
                      <Typography>...</Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" variant="outlined">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    flex: { lg: "1", md: "1", xs: "100%" },
                  }}
                >
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="span">
                        Meta (Facebook)
                      </Typography>
                      <Typography>...</Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WorkEXP;
