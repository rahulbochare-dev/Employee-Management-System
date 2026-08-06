import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const callApi = async function (method, url, data) {
  try {
    const response = await axios({
      method: method,
      url: `${BASE_URL}${url}`,
      data: data,
      headers:
        data instanceof FormData ? {} : { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return response;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};

export { callApi };
