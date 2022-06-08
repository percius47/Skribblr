import "./NewNote.css";

import PaletteIcon from '@mui/icons-material/Palette';
import FilterListIcon from '@mui/icons-material/FilterList';

import { useState } from "react";
import { useNotes } from "../contexts/notesContext";
import { RichTextEditor } from "./RichTextEditor";
import { ColorPalette } from "./ColorPalette";
import { PriorityBar } from "./PriorityBar";


const NewNote   = () => {
  const { input, setInput, noteExists, archiveExists, submitForm, closeNote } =
    useNotes();
  const [showColorPallete, setShowColorPallete] = useState(false);
  const [showPriorityField, setShowPriorityField] = useState(false);

  const buttonDisabled = !input.title && input.content === "<p><br></p>";

  return (
    <div className="form-open">
      <form
        className="form-group note-form"
        onSubmit={submitForm}
        style={{ backgroundColor: input.bgColor }}
      >
        <div className="input-rte">
          <input
            type="text"
            className="text-rte"
            placeholder="Title"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
            autoFocus
          />
        </div>

        <div className=" input-rte input-primary">
          <RichTextEditor
            value={input.content}
            setValue={(e) => setInput({ ...input, content: e })}
          />
        </div>

        <div className=" input-rte input-primary">
          <input
          className="text-rte"
            type="text"
            placeholder="Add a label"
            value={input.tags}
            onChange={(e) => setInput({ ...input, tags: [e.target.value] })}
          />
        </div>

        <div className="form-footer input-rte">
          <div className="form-options">
            {/* note color */}
            <i
              role="button"
              onClick={() => setShowColorPallete((show) => !show)}
            >
              <PaletteIcon/>
            </i>
            {/* Priority note */}
            <i
              role="button"
              onClick={() => setShowPriorityField((show) => !show)}
            >
        <FilterListIcon/>
            </i>
          </div>

          <div className="form-action">
            <button type="button" className="close-btn" onClick={closeNote}>
              Cancel
            </button>
            <button
              type="submit"
              className={`btn-save ${
                buttonDisabled ? "primary-disabled" : null
              }`}
              style={{
                cursor: buttonDisabled ? "not-allowed" : "pointer",
              }}
              disabled={buttonDisabled}
            >
              {noteExists || archiveExists ? "Save" : "Add"}
            </button>
          </div>
          <div className="options">
          {showColorPallete ? <ColorPalette setInput={setInput} /> : null}
          {showPriorityField ? <PriorityBar/> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export { NewNote };
