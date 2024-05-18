import axios from "axios";
// import { useContext } from "react";
axios.defaults.baseURL = "http://localhost:8000/";
import { useJwt } from "react-jwt";
// import { DataContext } from "../context";
// const context = useContext(DataContext)

async function apicalls(method, url, data) {
  try {
    const result = await axios({
      method,
      url,
      data,
      headers: {
        Authorization: "Bearer " + localStorage.token,
        // Authorization: "Bearer " + cookie.getItem("token"),
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const get = (url, obj) => {
  return apicalls("get", url, obj);
};

const post = (url, data) => {
  return apicalls("post", url, data);
};

const put = (url, data) => {
  return apicalls("put", url, data);
};

const Delete = (url, data) => {
  return apicalls("delete", url, data);
};
export default { get, post, put, Delete };
