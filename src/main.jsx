import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ControlMetrics from "./ControlMetrics.jsx";
import FirstCheck from "./FirstCheck.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ControlMetrics />
    <FirstCheck />
  </StrictMode>
);
