// Photography website
// Started on July 2020
// By Arnaud De Baerdemaeker

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./scss/styles.scss";

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
