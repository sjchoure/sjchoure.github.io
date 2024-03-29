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
import List from "@mui/material/List";

const WorkEXP = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box py={1} sx={{ bgcolor: "#E1E1E1" }}>
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
          >
            <Box mb={"0.1vh"} sx={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Work Experience
            </Box>
          </Grid>
          <Grid item sm={12} md={10} lg={10}>
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
                          src="/metaPic.jpeg"
                        />
                        <Stack direction="column">
                          <Typography variant="h6">
                            <strong>Meta (Facebook)</strong>
                          </Typography>
                          <Typography variant="subtitle1">
                            Menlo Park, CA, US
                          </Typography>
                          <Typography variant="subtitle2">
                            Software Engineering Intern
                          </Typography>
                          <Typography variant="caption">
                            May'22 - Aug'22
                          </Typography>
                          <List
                            sx={{
                              listStyle: "disc",
                              padding: {
                                xs: "0px",
                                md: "0px 0px 0px 16px",
                              },
                              textAlign: "justify",
                            }}
                          >
                            <li>
                              <Typography variant="body2">
                                The Ads (Responsibility and Privacy) team needed
                                a long-term solution to filter out specific ads
                                based on the restricted category data defined by
                                the user's jurisdiction. Hence, leading to the
                                creation of an internal tool, Policy Management
                                Tool. Policy Management Tool helped solve this
                                problem in multiple ways. Engineers from various
                                cross functional teams were efficiently able to
                                collaborate due to this tool.
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="body2">
                                Developed and designed from scratch policy
                                production control workflow for the Policy
                                Management Tool. It included views to display
                                entities like policies, models, document types,
                                with the ability to mutate them. Additionally,
                                to make the view more informative a live
                                visualization of policy status changes with
                                timestamps and by whom details were displayed
                                using Gantt chart. Shipped all those features
                                with unit test both in frontend and backend.
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="body2">
                                Created continuous Integration/deployment
                                framework to validate configuration file changes
                                upon mutation.
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="body2">
                                Handled implementing features in
                                Enforcement/Annotation API to collect user
                                impressions from all Facebook apps and log the
                                results for each policy if it's sensitive or
                                not. Thus, contributing to the team's roadmap of
                                rolling it out ahead of time.
                              </Typography>
                            </li>
                          </List>
                        </Stack>
                      </Stack>
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
                        sx={{
                          justifyContent: {
                            xs: "flex-start",
                            md: "flex-end",
                          },
                        }}
                      >
                        <img
                          height="55px"
                          alt="QWR"
                          src="/qwrPic.jpeg"
                        />
                        <Stack direction="column">
                          <Typography variant="h6">
                            <strong>Question What's Real</strong>
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
                          src="/stPic.jpeg"
                        />
                        <Stack direction="column">
                          <Typography variant="h6">
                            <strong>Scantech Laser</strong>
                          </Typography>
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
