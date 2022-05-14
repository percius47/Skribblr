import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router}from "react-router-dom"
import {AuthProvider} from "./contexts/authContext";
import { NotesProvider } from "./contexts/notesContext";
import { ArchiveProvider } from "./contexts/archiveContext";
import { TrashProvider } from "./contexts/trashContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <AuthProvider>
        <NotesProvider>
          <ArchiveProvider>
            <TrashProvider>
    <App />
    </TrashProvider>
    </ArchiveProvider>
    </NotesProvider>
    </AuthProvider>
    </Router>
   
  </React.StrictMode>,
  document.getElementById("root")
);
