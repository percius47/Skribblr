import { Toaster } from "react-hot-toast";
import "./App.css";
import Welcome from "./pages/Welcome";
import PageRoutes from "./routes/PageRoutes";




function App() {
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
