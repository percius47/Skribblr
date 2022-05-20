import toast from "react-hot-toast";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/loginService";
import { signupService } from "../services/signupService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const guestUser = {
    email: "admin@skribblr.com",
    password: "adminSkribblr123",
  };

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const [login, setLogin] = useState({
    input: {},
    error: "",
    hide: { pwd: true },
  });
  const [signup, setSignup] = useState({
    input: {},
    error: "", 
    pwdMatch: true,
    hide: { pwd: true, confirmPwd: true },
  });  

  const [loading, setLoading] = useState(false);
  const [user,setUser]=useState("");

  const signupInputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "confirmPwd") {
      setSignup({
        ...signup,
        input: { ...signup.input, [name]: value },
        pwdMatch: value === signup.input.password ? true : false,
      });
    } else {
      setSignup({ ...signup, input: { ...signup.input, [name]: value } });
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();


try {
  // setLoading(true);
  const { data } = await signupService(signup.input);
  // setLoading(false);
  toast.success(`Hi, ${data.createdUser.username}!`, {
    icon: "👋"
  });
  setUser(data.createdUser.username);
  localStorage.setItem("isAuth", true);
  localStorage.setItem("token", data.encodedToken);
  setToken(data.encodedToken);

  setIsAuth(true);
  setSignup({ ...signup, input: "" });

  navigate("/");
} catch (err) {
    console.log("error",err);
  // setLoading(false);
  toast.error("There was an error signing you up");
  setSignup({ ...signup, error: err.response.data.errors[0] });
}
  };
  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, input: { ...login.input, [name]: value } });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
   
      const { data } = await loginService(login.input);
      
      toast.success(`Welcome back, ${data.foundUser.username}!`, {
        icon: "👋",
      });

      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);
     
      setUser(data.foundUser.username);
      setLogin({ ...login, input: { email: "", password: "" } });
      setIsAuth(true);

      navigate("/home");
    } catch (err) {
      toast.error("Error occured");
      console.log("error",err);
      setLogin({ ...login, error: err.response.data.errors[0] });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isAuth", false);
    setIsAuth(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        setIsAuth,
        token,
        setToken,
        navigate,
        login,
        setLogin,
        signup,
        setSignup,
        loginInputHandler,
        loginHandler,
        signupInputHandler,
        signupHandler,
        logoutHandler,
        guestUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
