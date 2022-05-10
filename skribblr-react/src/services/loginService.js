import axios from "axios";

const loginService = (loginInput) => {
  console.log(loginInput);
  return axios.post("/api/auth/login", loginInput);
};

export { loginService };
