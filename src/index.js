import React from "react";
import ReactDOM from "react-dom/client";
import './bootstrap';
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import App from "App";

import { SoftUIControllerProvider } from "context";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SoftUIControllerProvider>
        <App />
      </SoftUIControllerProvider>
    </BrowserRouter>
  </Provider>
);
