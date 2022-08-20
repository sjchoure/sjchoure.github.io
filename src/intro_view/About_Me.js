import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DescriptionIcon from '@mui/icons-material/Description';

const AboutMe = () => {
  return (
    <Card>
      <CardContent sx={{ textAlign: "justify" }}>
        <Box sx={{ fontWeight: 700, fontSize: "1.6rem" }}>About Me</Box>
        <Box sx={{ fontStyle: "italic", fontWeight: 300 }}>
          Fun Fact: I love pushing the capabilities of the software beyond
          imagination with magic!
        </Box>
        <Box>
          Computer Science major pursing master's of science degree from The
          University of Texas at Dallas. I have work experiences from building
          softwares from scratch for small startups to optimizing workflows for
          big-tech companies. My concentration is mostly in Infrastructure and
          Distributed Systems and open to explore any other fields as well. Feel
          free to request for more details by contacting me.
        </Box>
        <Button variant="outlined" startIcon={<DescriptionIcon />}>
          Resume
        </Button>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
