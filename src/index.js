import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";

import "./main.scss";

ReactDOM.render(
  <Main />,
  document.getElementById("app")
);