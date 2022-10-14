import { loginFailed, loginStart, loginSuccess } from "~/redux/authSlice";
import RequestHttp, * as request from "~/utils/request";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

// export const login = async (formData, dispatch, navigate) => {
//   // dispatch(loginStart());
//   try {
//     const res = await request.post(`/users/login`, formData);
//     console.log(res);
//     // if (res.status == 200) {
//     //   swal({
//     //     title: "Success!",
//     //     text: res.message,
//     //     icon: "success",
//     //   }).then(() => {
//     //     const user = JSON.stringify(res.user);
//     //     localStorage.setItem("currentUser", user);
//     //     dispatch(loginSuccess(res.user));
//     //     navigate("/");
//     //   });
//     // } else if (res.status == 401) {
//     //   swal({
//     //     title: "Error!",
//     //     text: res.message,
//     //     icon: "error",
//     //   });
//     // } else {
//     //   dispatch(loginFailed(res.validate_err));
//     // }
//   } catch (error) {
//     console.log(error);
//     dispatch(loginFailed());
//   }
// };

function UserService() {
  const { request, setToken } = RequestHttp();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (formData) => {
    try {
      await request.post(`/user/login`, formData).then((res) => {
        setToken(res.data.access_token);
        swal({
          title: "Success!",
          text: "Login successed",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      });
    } catch (error) {
      dispatch(loginFailed());
      console.log(error);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  const fetchUserDetail = async () => {
    try {
      await request.post(`/user`).then((res) => {
        // console.log(res.data);
        dispatch(loginSuccess(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    logout,
    fetchUserDetail,
  };
}
export default UserService;
