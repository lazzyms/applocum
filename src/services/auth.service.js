import axios from "axios";

const API_URL = "";

const register = (data) => {
  return axios.post(API_URL + "signup", data);
};

const login = (data) => {
  return axios
    .post(API_URL + "signin", data)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line
export default {
  register,
  login,
  logout
};