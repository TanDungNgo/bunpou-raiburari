import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "~/services/userService";

function RequestHttp() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const [token, setToken] = useState(getToken());
  const saveToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };

  const request = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  return {
    setToken: saveToken,
    token,
    getToken,
    request,
  };
}

export default RequestHttp;