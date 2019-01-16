import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import test01 from "./test01";

it("renders without crashing", () => {
  const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  ReactDOM.render(<test01 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
