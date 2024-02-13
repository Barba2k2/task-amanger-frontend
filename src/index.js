import React from "react";
import ReactDOM from "react-dom/client";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offeset: "30px",
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
