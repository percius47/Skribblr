

import { NewNote } from "../components/NewNote";
import { useNotes } from "../contexts/notesContext";
import "./Home.css";
import React from 'react'
import { NoteListing } from "../components/NoteListing";

function Home() {
  const {
    noteState: { notes },
    showInput,setShowInput, setIsEditing, setInput, formInputs,
  } = useNotes();

  return (
    <div className="component-container home-container">
      {showInput ? <NewNote /> : null}
     
    
      <NoteListing notes={notes} />
    </div>
  );
}

export default Home


