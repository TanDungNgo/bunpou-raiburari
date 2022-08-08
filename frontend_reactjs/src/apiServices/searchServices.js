import * as request from "~/utils/request";

export const search = async (q) => {
  try {
    const res = await request.get(`search/q=${q}`);
    return res.listKanji;
  } catch (error) {
    console.log(error);
  }
};
