
import "./NoteListing.css";

import { useSearchedNotes } from "../customHooks/useSearchedNotes";
import { useNotes } from "../contexts/notesContext";
import { getNotesByPriorityFilter } from "../util/getNotesByPriorityFilter";
import { getNotesByPrioritySort } from "../util/getNotesByPrioritySort";
import  {getNotesByDate} from "../util/getNotesByDate"
import { NoteCard } from "./NoteCard";
const NoteListing = ({ notes }) => {
  const { notesOrder, searchVal } = useNotes();

  const searchedNotes = useSearchedNotes(notes, searchVal);

  const sortedByDate = getNotesByDate(searchedNotes, notesOrder.sort);
  const sortedByPriority = getNotesByPrioritySort(
    sortedByDate,
    notesOrder.sort
  );
  const filterByPriority = getNotesByPriorityFilter(
    sortedByPriority,
    notesOrder.filter
  );
  const filteredNotes = filterByPriority;

  return (
    <div>
      
      <div className="notes-wrapper">
       
        {filteredNotes.length > 0 ? (
         
          filteredNotes.map((unPinnedNote) => {
          
            return <NoteCard note={unPinnedNote} key={unPinnedNote._id} />;
            
          })
        ) : (
          <p className="text-center">We don't have any notes to show here.</p>
        )}
      </div>
    </div>
  );
};

export { NoteListing };
