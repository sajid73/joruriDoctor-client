const axios = require("axios");

// const api = "http://localhost:3005";
const api = "https://morning-falls-82437.herokuapp.com";

export const signUpUser = async (info) => {
  try {
    const res = await axios.post(`${api}/user/signup`, info);
    localStorage.setItem("token", res.data.token);
    return res;
  } catch (error) {
    return error;
  }
};

export const signInUser = async (info) => {
  try {
    const res = await axios.post(`${api}/user/signin`, info);
    localStorage.setItem("token", res.data.token);
    return res;
  } catch (error) {
    return error;
  }
};

export const myProfile = async (token) => {
  try {
    const res = await axios.post(`${api}/user/me`, { token });
    localStorage.setItem("token", res.data.token);
    return res;
  } catch (error) {
    return error;
  }
};
