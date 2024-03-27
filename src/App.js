import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage";
import Project from "./components/project";
import Header from "./components/header";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </BrowserRouter>
);

export default App;
