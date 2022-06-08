import { Toaster } from "react-hot-toast";
import "./App.css";
import { useNotes } from "./contexts/notesContext";

import PageRoutes from "./routes/PageRoutes";



import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
function App() {
  const {
    noteState: { notes },
    showInput,setShowInput, setIsEditing, setInput, formInputs,
  } = useNotes();
  return (
    <div className="App">
    
      <PageRoutes />
      
   
       <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "4rem",
        }}
      /> 
    </div>
  );
}

export default App;
