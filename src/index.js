import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Store } from "./helpers/store";
import { Provider } from "react-redux";
import Router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <Router />
  </Provider>
);

reportWebVitals();