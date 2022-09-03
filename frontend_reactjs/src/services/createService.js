import * as request from "~/utils/request";
import swal from "sweetalert";

export const createCardKanji = async (formData) => {
  try {
    const res = await request.post("/add-kanji", formData);
    if (res.status == 200) {
      console.log(res);
      swal({
        title: "Success!",
        text: res.message,
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } else {
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};
