import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Pcard = (props) => {
  // props destructuring
  const { name, description, skills, github, linkedIn } = props;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="skillContainer">
        {skills.map((skill) => (
          <span className="skills">{skill}</span>
        ))}
      </div>
      <div className="icon">
        <span className="projectLink">
          <a href={github}>
            <GitHubIcon sx={{ color: "black" }} />
          </a>
        </span>
        <span className="projectLink">
          <a href={linkedIn}>
            <LinkedInIcon sx={{ color: "black" }} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Pcard;
