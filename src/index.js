import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/flexboxgrid2/flexboxgrid2.css";
import registerServiceWorker from "./registerServiceWorker";

import "normalize.css";
import "flexboxgrid2";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
