import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider.tsx";
import NoteContextProvider from "./context/NoteContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <NoteContextProvider>
          <App />
        </NoteContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
