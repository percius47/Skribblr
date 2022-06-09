import "./Label.css";

import { useEffect } from "react";
import { useNotes } from "../contexts/notesContext";
import { NoteListing } from "../components/NoteListing";
import { NewNote } from "../components/NewNote";

const Label = () => {
  const {
    showInput,
    noteState: { notes },
    tagsArray,
    setTagsArray,
  } = useNotes();


  useEffect(() => {
    setTagsArray(() => {
      const tags = notes.map((note) => note.tags[0] || null);

      return notes
        .map((note) => note.tags[0])
        .filter((tag, index) => tags.indexOf(tag) === index);
    });
  }, [notes]);

  return (
    <div className="component-container">
      {tagsArray.length > 0 ? (
        tagsArray?.map((tag) => {
          return (
            <div className="label-wrapper">
              <h4>{tag}</h4>
              <NoteListing notes={notes.filter((note) => note.tags[0] === tag)} />
            </div>
          );
        })
      ) : (
        <p className="center-text">No labels added!</p>
      )}

      {showInput ? <NewNote /> : null}
    </div>
  );
};

export { Label };
