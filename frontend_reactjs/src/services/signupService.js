import RequestHttp, * as request from "~/utils/request";
import swal from "sweetalert";

export const signup = async (formData) => {
  const {request} = RequestHttp();
  try {
    const res = await request.post(`/users/register`, formData);
    if (res.status == 200) {
      swal({
        title: "Success!",
        text: res.message,
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
