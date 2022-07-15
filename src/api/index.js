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
    if (res.data.user.role === "doctor") {
      const response = await doctorInfo(`userId=${res.data.user._id}`);
      delete response.data.doctors[0].userId;
      res.data = { ...res.data.user, ...response.data.doctors[0] };
      return res;
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const myProfile = async (token) => {
  try {
    const res = await axios.post(`${api}/user/me`, { token });
    localStorage.setItem("token", res.data.token);
    if (res.data.user.role === "doctor") {
      const response = await doctorInfo(`userId=${res.data.user._id}`);
      delete response.data.doctors[0].userId;
      res.data = { ...res.data.user, ...response.data.doctors[0] };
      return res;
    }
    return res;
  } catch (error) {
    return error;
  }
};

// Doctor section

export const addDoctor = async (info) => {
  try {
    const res = await axios.post(`${api}/doctor`, info);
    return res;
  } catch (error) {
    return error;
  }
};

export const doctorList = async () => {
  try {
    const res = await axios.get(`${api}/doctor`);
    return res;
  } catch (error) {
    return error;
  }
};

export const doctorInfo = async (query) => {
  try {
    const res = await axios.get(`${api}/doctor?${query}`);
    return res;
  } catch (error) {
    return error;
  }
};
