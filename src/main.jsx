import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { LanguageProvider } from "./contexts/languageContext.jsx";
import { NotificationProvider } from "./contexts/notificationContext.jsx";
import "./index.css";
import { UserProvider } from "./contexts/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <LanguageProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </LanguageProvider>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
