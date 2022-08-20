import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Skills = () => {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" justify="center" rowSpacing={2}>
          <Grid item>
            <Box sx={{ fontWeight: 700, fontSize: "1.6rem" }}>Skill Sets</Box>
            
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
