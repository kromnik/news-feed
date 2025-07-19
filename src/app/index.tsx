import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "./providers/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { App } from './App';
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
