import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./css/styles.css";

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
