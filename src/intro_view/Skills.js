import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Skills = () => {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" justify="center" rowSpacing={2}>
          <Grid item>
            <Box mb={"0.1vh"} sx={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Skill Sets
            </Box>
            <Box mb={"0.1vh"} sx={{ fontSize: "0.9rem" }}>
              Programming Languages
            </Box>
            <Stack direction="row" gap={1.5} sx={{ flexWrap: "wrap" }}>
              <img
                alt="C"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />

              <img
                alt="C++"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              />

              <img
                alt="php"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />

              <img
                alt="java"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />

              <img
                alt="go"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
              />

              <img
                alt="python"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />

              <img
                alt="ruby"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg"
              />

              <img
                alt="bash"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
              />
            </Stack>
            <Box mb={"0.1vh"} sx={{ fontSize: "0.9rem" }}>
              Framework and Tools
            </Box>
            <Stack direction="row" gap={1.5} sx={{ flexWrap: "wrap" }}>
              <img
                alt="react"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />

              <img
                alt="nodejs"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />

              <img
                alt="graphql"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
              />

              <img
                alt="redux"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />

              <img
                alt="linux"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
              />

              <img
                alt="mysql"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
            </Stack>
            <Box mb={"0.1vh"} sx={{ fontSize: "0.9rem" }}>
              Cloud Platfdorm
            </Box>

            <Stack direction="row" gap={1.5} sx={{ flexWrap: "wrap" }}>
              <img
                alt="aws"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
              />

              <img
                alt="GCP"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
              />

              <img
                alt="azure"
                height="55px"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
              />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
