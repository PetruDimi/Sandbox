import ReactDOM from "react-dom/client";

import CtxProvider from "./context/CtxProvider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CtxProvider>
    <App />
  </CtxProvider>
);
