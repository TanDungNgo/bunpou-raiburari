import { loginFailed, loginStart, loginSuccess } from "~/redux/authSlice";
import * as request from "~/utils/request";
import swal from "sweetalert";

export const login = async (formData, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await request.post(`/users/login`, formData);
    if (res.status == 200) {
      swal({
        title: "Success!",
        text: res.message,
        icon: "success",
      }).then(() => {
        const user = JSON.stringify(res.user);
        localStorage.setItem("currentUser", user);
        dispatch(loginSuccess(res.user));
        navigate("/");
      });
    } else if (res.status == 401) {
      swal({
        title: "Error!",
        text: res.message,
        icon: "error",
      });
    } else {
      dispatch(loginFailed(res.validate_err));
    }
  } catch (error) {
    console.log(error);
    dispatch(loginFailed());
  }
};

export const logout = () => {
  localStorage.removeItem("currentUser");
  window.location.reload();
};
