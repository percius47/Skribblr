import { NewNote } from "../components/NewNote";
import { NoteListing } from "../components/NoteListing";
import { useNotes } from "../contexts/notesContext";
import  "./Archive.css"
const Archive = () => {
  const {
    showInput,
    noteState: { archives },
  } = useNotes();

  return (
    <div className="component-container archive-container">
 
      <NoteListing notes={archives} />
      {showInput ? <NewNote /> : null}
    </div>
  );
};

export { Archive };
