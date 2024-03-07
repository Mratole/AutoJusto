import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Inicio } from "./components/Inicio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Inicio />
  </React.StrictMode>
);
