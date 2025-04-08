import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ControlMetrics from "./ControlMetrics.jsx";
import Check1 from "./Check1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ControlMetrics />
    <Check1 />
  </StrictMode>
);
