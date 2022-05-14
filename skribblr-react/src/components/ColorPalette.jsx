import "./ColorPalette.css";
import { useNotes } from "../contexts/notesContext";

const colorData = [
  {
    id: 1,
    color: "#ffffbe",
   
  },
  {
    id: 2,
    color: "#f3f3f3",
   
  },
  {
    id: 3,
    color: "#fed4da",
   
  },
  {
    id: 4,
    color: "#f3f3f3",
  },
  {
    id: 5,
    color: "#bafbba",
    
  },
];

const ColorPalette = ({ note, setInput }) => {
  const { input, isEditing, updateNoteHandler } = useNotes();

  return (
    <div className="color-palette">
      {colorData.map((colors) => (
        <button
          key={colors.id}
          type="button"
          className="btn btn-color"
          style={{ backgroundColor: colors.color }}
          onClick={(e) => {
            e.stopPropagation();
            isEditing
              ? setInput({ ...input, bgColor: colors.color })
              : updateNoteHandler({ ...note, bgColor: colors.color });
          }}
        ></button>
      ))}
    </div>
  );
};

export { ColorPalette };
