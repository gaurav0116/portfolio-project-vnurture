import React from "react";
import Pcard from "../Components/Pcard";

const projectData = [
  {
    name: "GYM Exercise App",
    description:
      "This app is provide 1000+ exercise & details of all body parts from Rapid API and also provide Serach exercise option & exercise related youtube videos.",
    skills: ["React", "Rapid API", "MaterialUI"],
    github: "https://github.com/gaurav0116/Gym-Application",
    linkedIn: "https://www.linkedin.com/in/gaurav-dhandhukiya-1b1889204/"
  },
  {
    name: "Chat Application",
    description:
      "This App is provides chattig & file sharing utilitys between each users. And all the users information store in chat engine. ",
    skills: ["React", "ChatEngine api", "Ant Design"],
    github: "https://github.com/gaurav0116/chat-application",
    linkedIn: "https://www.linkedin.com/in/gaurav-dhandhukiya-1b1889204/"
  },
  {
    name: "To-Do List App",
    description:
      "This is To-list application is provide feature of create list of Items. This app store items in list for temporary time.",
    skills: ["React", "MaterialUI Icons", "Hooks"],
    github: "https://github.com/gaurav0116/To-Do-List",
    linkedIn: "https://www.linkedin.com/in/gaurav-dhandhukiya-1b1889204/"
  }
];

const Project = () => {
  return (
    <div className="project-container">
      {projectData.map((item, index) => {
        return (
          <Pcard
            key={index}
            name={item.name}
            description={item.description}
            skills={item.skills}
            github={item.github}
            linkedIn={item.linkedIn}
          />
        );
      })}
    </div>
  );
};

export default Project;
