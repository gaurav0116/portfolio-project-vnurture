import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </div>
  );
}
