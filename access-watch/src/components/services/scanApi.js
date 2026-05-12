import axios from "axios";

export const scanWebsite = async (url) => {

  const response = await axios.post(
    "http://localhost:5000/scan",
    {
      url,
    }
  );

  return response.data;
};