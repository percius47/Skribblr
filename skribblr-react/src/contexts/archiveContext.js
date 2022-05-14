import { createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { archiveNoteService } from "../services/archiveNoteService";
import { archiveToTrashService } from "../services/archiveToTrash";
import { getArchivedService } from "../services/getArchivedService";
import { unArchiveNoteService } from "../services/unarchiveNoteService";
import { useAuth } from "./authContext";
import { useNotes } from "./notesContext";



const ArchiveContext = createContext();



const ArchiveProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const { dispatchNote } = useNotes();

  useEffect(() => {
    if (isAuth) {
      (async () => {
        const { data, status } = await getArchivedService(token);

        if (status === 200) {
          dispatchNote({ type: "SET_ARCHIVED", payload: data.archives });
        }
      })();
    }
  }, [token]);

  const archiveNote = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await archiveNoteService(note, token);

      if (status === 201) {
        toast.success("Note archived");
        dispatchNote({
          type: "SET_NOTES_ARCHIVE",
          payload: { notes: data.notes, archives: data.archives },
        });
      }
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  const unArchiveNote = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await unArchiveNoteService(note, token);

      if (status === 200) {
        toast.success("Note unarchived");
        dispatchNote({
          type: "SET_NOTES_ARCHIVE",
          payload: { notes: data.notes, archives: data.archives },
        });
      }
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  const archivesToTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await archiveToTrashService(note, token);

      if (status === 200) {
        toast.success("Note moved to Trash");
        dispatchNote({
          type: "SET_ARCHIVE_TRASH",
          payload: { archives: data.archives, trash: data.trash },
        });
      }
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  return (
    <ArchiveContext.Provider
      value={{ archiveNote, unArchiveNote, archivesToTrash }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { ArchiveProvider, useArchive };
