import App from "routes/routes";
import React from "react";
import ReactDOM from "react-dom";
import analytics from "./analytics";

analytics.init();

ReactDOM.render(<App />, document.getElementById("root"));
