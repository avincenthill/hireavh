import ReactDOM from "react-dom";
import "normalize.css";
import "styles/index.css";
import createRoutes from "routes/routes";

const routes = createRoutes();

ReactDOM.render(routes, document.getElementById("root"));
