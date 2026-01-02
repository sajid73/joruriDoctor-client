const axios = require("axios");

const api = process.env.REACT_APP_SERVER_API;
console.log(api)

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

export const saveProfile = async (user) => {
  const info = JSON.stringify(user);
  localStorage.setItem("user", info);
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

export const updateDoctor = async (id, info) => {
  try {
    const res = await axios.patch(`${api}/doctor/${id}`, info);
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

export const getAppointment = async (id) => {
  try {
    const res = await axios.patch(`${api}/appointment/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

export const updateAppointment = async (id, info) => {
  try {
    const res = await axios.patch(`${api}/appointment/${id}`, info);
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

export const blogList = async (query) => {
  try {
    //   const d = new Date();
    //   let url = `https://newsapi.org/v2/everything?q=Healthcare&from=${d.getFullYear()}-${
    //     d.getMonth() + 1
    //   }-${d.getDate()}&page=1&pageSize=3&sortBy=relevancy&apiKey=103827d534c644379f1802564ec4c2b1`;
    //   // console.log(url)
    //   let res = await axios.get(url);
    //   if (res.data.totalResults === 0) {
    //     url = `https://newsapi.org/v2/everything?q=Healthcare&from=${d.getFullYear()}-${
    //       d.getMonth() + 1
    //     }-${
    //       d.getDate() - 1
    //     }&page=1&pageSize=3&sortBy=relevancy&apiKey=103827d534c644379f1802564ec4c2b1`;
    //     res = await axios.get(url);

    //   return res;
    // }
    const headers = {
      'X-RapidAPI-Key': 'e96b3332b1msh73a82fc1cb18844p14a249jsna992d1e0e6e7',
      'X-RapidAPI-Host': 'heath-news.p.rapidapi.com'
    }
    const res = await axios.get('https://heath-news.p.rapidapi.com/news', { headers })
    // console.log(res)
    return res?.data.slice(0,3);
  } catch (error) {
    return error;
  }
};
