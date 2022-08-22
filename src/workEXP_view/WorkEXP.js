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
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Stack from "@mui/material/Stack";

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
                    <CorporateFareIcon />
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
                      <Stack direction="row" alignItems="flex-start">
                        <img
                          height="55px"
                          alt="QWR"
                          src="https://media-exp1.licdn.com/dms/image/C4E0BAQFdNatYGiBelg/company-logo_200_200/0/1636138753911?e=1669248000&v=beta&t=fstPmR_75BbPANOk8bhCYLZDiPTZxNyXhbL6HQ8XqHE"
                        />
                        <Stack direction="column">
                          <Typography variant="h6">Meta (Facebook)</Typography>
                          <Typography variant="subtitle1">
                            Menlo Park, CA, US
                          </Typography>
                          <Typography variant="subtitle2">
                            Software Engineering Intern
                          </Typography>
                          <Typography variant="caption">
                            May'22 - Aug'22
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography>...</Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <CorporateFareIcon />
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
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-end"
                      >
                        <img
                          height="55px"
                          alt="QWR"
                          src="https://media-exp1.licdn.com/dms/image/C510BAQECQ8lGqvb9eA/company-logo_200_200/0/1582547881312?e=1669248000&v=beta&t=AYze6YPgdMMRs8GRG4go1aUFw8Vg2MdR7KBaKefnYKM"
                        />
                        <Stack direction="column">
                          <Typography variant="h6">
                            Question What's Real
                          </Typography>
                          <Typography variant="subtitle1">
                            Mumbai, MH, India
                          </Typography>
                          <Typography variant="subtitle2">
                            WebDev Intern
                          </Typography>
                          <Typography variant="caption">
                            Aug'20 - Oct'20
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography>...</Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <CorporateFareIcon />
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
                      <Stack direction="row" alignItems="flex-start" gap={1.5}>
                        <img
                          height="55px"
                          alt="ST"
                          src="https://media-exp1.licdn.com/dms/image/C510BAQFaSjSKohnl-w/company-logo_200_200/0/1531927635737?e=1669248000&v=beta&t=WlToRaXDlZTcOY2xwQnoCIDx05OjbBP453mHIJV-Q5o"
                        />
                        <Stack direction="column">
                          <Typography variant="h6">Scantech Laser</Typography>
                          <Typography variant="subtitle1">
                            Mumbai, MH, India
                          </Typography>
                          <Typography variant="subtitle2">
                            Software Engineering Intern
                          </Typography>
                          <Typography variant="caption">
                            Jun'19 - Jul'19
                          </Typography>
                        </Stack>
                      </Stack>
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
