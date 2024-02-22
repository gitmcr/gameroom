import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID MO_zPGCAzn_hYWRM5f-ZJE_Z5Nv1tnm_M1MoTsokkPQ",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
