import axios from "axios";

const apiKey = import.meta.env.VITE_A11YFLOW_API_KEY;

export const scanWebsite = async (url) => {
  try {
    const response = await axios.post(
      "PASTE_API_URL_HERE",
      {
        url: url,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    (error);
    throw error;
  }
};