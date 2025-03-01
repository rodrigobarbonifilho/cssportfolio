import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalCSS } from "./globalCSS.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalCSS />
    <App />
  </StrictMode>
);
