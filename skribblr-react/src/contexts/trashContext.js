import { createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { deleteFromTrashService } from "../services/deleteFromTrash";
import { getTrashService } from "../services/getTrashService";
import { moveToTrashService } from "../services/moveToTrashService";
import { restoreFromTrashService } from "../services/restoreFromTrash";

// import {
//   getTrashService,
//   moveToTrashService,
//   restoreFromTrashService,
//   deleteFromTrashService,
// } from "../services";


import { useAuth } from "./authContext";
import { useNotes } from "./notesContext";


const TrashContext = createContext();



const TrashProvider = ({ children }) => {
  const { isAuth, token } = useAuth();
  const { dispatchNote } = useNotes();

  useEffect(() => {
    if (isAuth) {
      (async () => {
        const { data, status } = await getTrashService(token);

        if (status === 201) {
          dispatchNote({ type: "SET_TRASH", payload: data.trash });
        }
      })();
    }
  }, [token]);

  const moveToTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await moveToTrashService(note, token);
        console.log("traash data",data);
      if (status === 201) {
        toast.success("Note moved to Trash");
        dispatchNote({
          type: "SET_NOTES_TRASH",
          payload: { notes: data.notes, trash: data.trash },
        });
      }
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  const restoreFromTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await restoreFromTrashService(note, token);

      if (status === 200) {
        toast.success("Note restored");
        dispatchNote({
          type: "SET_NOTES_TRASH",
          payload: { notes: data.notes, trash: data.trash },
        });
      }
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  const deleteFromTrash = async (e, note) => {
    e.stopPropagation();

    try {
      const { data, status } = await deleteFromTrashService(note, token);

      if (status === 200) {
        toast.success("Note deleted permanently");
        dispatchNote({
          type: "SET_TRASH",
          payload: data.trash,
        });
      } 
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  return (
    <TrashContext.Provider
      value={{ moveToTrash, restoreFromTrash, deleteFromTrash }}
    >
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { TrashProvider, useTrash };
