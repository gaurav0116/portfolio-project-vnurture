import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// Skills Data
const skillsData = [
  "Data Structures",
  "DBMS",
  "OOP",
  "Operating System",
  "FrontEnd Development",
  "ReactJS",
  "NodeJS",
  "Git & Github",
  "Core Java",
  "JavaScript",
  "Python"
];

const Item = styled(Paper)(() => ({
  textAlign: "center",
  color: "black",
  height: 60,
  lineHeight: "60px"
}));

const Skills = () => {
  return (
    <div className="skills-page">
      <h2> Skills </h2>
      <div className="skills-cards">
        <Grid container spacing={1}>
          {
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: {
                    md: "1fr 1fr 1fr",
                    sm: "1fr 1fr",
                    xs: "1fr"
                  },
                  gap: 2
                }}
              >
                {skillsData.map((Skill, index) => (
                  <Item key={index} elevation={6}>
                    {Skill}
                  </Item>
                ))}
              </Box>
            </Grid>
          }
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
