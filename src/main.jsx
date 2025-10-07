import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="235893850699-hg63vspn43vknt3m6iiile3onspuvdk2.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
