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
            <Box mb={"0.1vh"} sx={{ fontWeight: 700, fontSize: "1.3rem" }}>
              Skill Sets
            </Box>
            <Box mb={"0.1vh"} sx={{ fontSize: "0.9rem" }}>
              Programming Languages
            </Box>
            <img
              alt="C"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            />

            <img
              alt="C++"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            />

            <img
              alt="php"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            />

            <img
              alt="java"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            />

            <img
              alt="go"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
            />

            <img
              alt="python"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            />

            <img
              alt="ruby"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg"
            />

            <img
              alt="bash"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
            />

            <Box mb={"0.1vh"} sx={{ fontSize: "0.9rem" }}>
              Framework and Tools
            </Box>

            <img
              alt="react"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            />

            <img
              alt="nodejs"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            />

            <img
              alt="graphql"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
            />

            <img
              alt="redux"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />

            <img
              alt="linux"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />

            <img
              alt="mysql"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            />

            <Box mb={"0.1vh"} sx={{ fontSize: "0.9rem" }}>
              Cloud Platfdorm
            </Box>
            <img
              alt="mysql"
              height="50px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Skills;
