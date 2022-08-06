const axios = require("axios");

// const api = "http://localhost:3001";
const api = "https://morning-falls-82437.herokuapp.com";

export const signUpUser = async (info) => {
  try {
    const res = await axios.post(`${api}/user/signup`, info);
    localStorage.setItem("token", res.data.token);
    res.data = { ...res.data.user };
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
    } else if (res.data.user.role === "patient") {
      const response = await patientInfo(`userId=${res.data.user._id}`);
      delete response.data.patients[0].userId;
      res.data = { ...res.data.user, ...response.data.patients[0] };
      return res;
    }
    res.data = { ...res.data.user };
    return res;
  } catch (error) {
    return error;
  }
};

export const myProfile = async (token) => {
  try {
    const res = await axios.post(`${api}/user/me`, { token });
    if (res.data.user.role === "doctor") {
      const response = await doctorInfo(`userId=${res.data.user._id}`);
      delete response.data.doctors[0].userId;
      res.data = { ...res.data.user, ...response.data.doctors[0] };
      return res;
    } else if (res.data.user.role === "patient") {
      const response = await patientInfo(`userId=${res.data.user._id}`);
      delete response.data.patients[0].userId;
      res.data = { ...res.data.user, ...response.data.patients[0] };
      return res;
    }
    res.data = { ...res.data.user };
    return res;
  } catch (error) {
    return error;
  }
};

export const updateProfile = async (info) => {
  try {
    const token = localStorage.getItem("token");
    await axios.patch(`${api}/user/me`, { token, user: info });
    return myProfile(token);
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

// Patient section

export const patientInfo = async (query) => {
  try {
    const res = await axios.get(`${api}/patient?${query}`);
    return res;
  } catch (error) {
    return error;
  }
};

// Appointment section

export const createAppointment = async (info) => {
  try {
    const res = await axios.post(`${api}/appointment`, info);
    return res;
  } catch (error) {
    return error;
  }
};

export const appointmentList = async (query) => {
  try {
    const res = await axios.get(`${api}/appointment`, { params: query });
    return res;
  } catch (error) {
    return error;
  }
};
