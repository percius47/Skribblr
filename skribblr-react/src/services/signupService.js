import axios from "axios";

const signupService = (signupInput) => {
    console.log("sign up obj",signupInput);
  return axios.post("/api/auth/signup", signupInput);
};

export { signupService };