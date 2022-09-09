import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // baseURL: "https://murmuring-mountain-75420.herokuapp.com/api",
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export const post = async (path, formData) => {
  const response = await request.post(path, formData);
  return response.data;
};

export const put = async (path, state) => {
  const response = await request.put(path, state);
  return response.data;
};

export const destroy = async (path) => {
  const response = await request.delete(path);
  return response.data;
};

export default request;
