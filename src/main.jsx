import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import { EventProvider } from "./context/EventContext";
import { NoteProvider } from "./context/NoteContext";
import { UIProvider } from "./context/UIContext"

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <EventProvider>
          <NoteProvider>
            <UIProvider>
              <App />
            </UIProvider>
          </NoteProvider>
        </EventProvider>
      </TaskProvider>
    </BrowserRouter>
  </StrictMode>
);