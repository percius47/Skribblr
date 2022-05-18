import { NoteListing } from "../components/NoteListing";
import { useNotes } from "../contexts/notesContext";


const Trash = () => {
  const {
    noteState: { trash },
  } = useNotes();

  return (
    <div className="component-container trash-container">
      <NoteListing notes={trash} />

    </div>
  );
};

export { Trash };
