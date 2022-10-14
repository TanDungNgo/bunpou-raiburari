import RequestHttp from "~/utils/request";

function SearchService() {
  const { request } = RequestHttp();
  const search = async (q) => {
    try {
      request.get(`search/q=${q}`).then((res) => {
        console.log(res.data)
        return res.data;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { search };
}

export default SearchService;
