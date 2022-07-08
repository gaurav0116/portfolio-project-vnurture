import React from "react";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="mainHomePage">
        <h1>
          Hi, I am <span className="name">Gaurav Dhandhukiya.</span>
        </h1>
        <h2 className="profeesion">A Front End (ReactJS) Engineer.</h2>
        <p className="desc">
          My self <b>Gaurav Dhandhukiya</b>. I am from <b>Amreli, Gujarat</b>.
          Currently, I am
          <b> Computer Science Engineering</b> final year student at Government
          Engineering College, Patan. I am interested in <b>MERN stack</b>{" "}
          development. I have better knowledge of Core CS subjects like{" "}
          <b>
            <i>Data Structures, DBMS, OOPs, and Computer Networks</i>
          </b>
          . Also, I have done my project in
          <b> ReactJS</b>. In the future, I'm interested in <b>JavaScript</b>{" "}
          and its Frameworks/Libraries.
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1pKZamRzD1rOUTmGo09VTgJmyBR6ULl8E/view?usp=sharing"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" sx={{ margin: "5px auto 20px auto" }}>
              Resume
            </Button>
          </a>
          <div className="links">
            <a href="https://github.com/gaurav0116" target="_blank">
              GitHub
            </a>
            <a href="linkedin.com/in/gaurav-dhandhukiya-1b1889204">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
