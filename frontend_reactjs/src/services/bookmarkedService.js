import * as request from "~/utils/request";

export const bookmark = async (formData) => {
  try {
    const res = await request.post("/bookmarkedKanji", formData);
    console.log(res.message);
  } catch (error) {
    console.log(error);
  }
};

export const unbookmark = async (id) => {
  try {
    const res = await request.destroy(`/unbookmarkedKanji/${id}`);
    console.log(res.message);
  } catch (error) {
    console.log(error);
  }
};
