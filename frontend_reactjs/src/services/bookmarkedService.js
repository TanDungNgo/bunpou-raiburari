import RequestHttp, * as request from "~/utils/request";

export const bookmark = async (formData) => {
  const {request} = RequestHttp();
  try {
    const res = await request.post("/bookmarkedKanji", formData);
    console.log(res.message);
  } catch (error) {
    console.log(error);
  }
};

export const unbookmark = async (id) => {
  const {request} = RequestHttp();
  try {
    const res = await request.destroy(`/unbookmarkedKanji/${id}`);
    console.log(res.message);
  } catch (error) {
    console.log(error);
  }
};
