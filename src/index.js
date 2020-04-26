import ReactDOM from "react-dom";
import "normalize.css";
import "styles/index.css";
import createRoutes from "routes/routes";
import utils from "utils/utils";

utils.renderTheme();
const routes = createRoutes();

ReactDOM.render(routes, document.getElementById("root"));
