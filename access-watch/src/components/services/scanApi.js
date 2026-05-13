// import axios from "axios";

// export const scanWebsite = async (url) => {

//   const response = await axios.post(
//     "http://localhost:5000/scan",
//     {
//       url,
//     }
//   );

//   return response.data;
// };

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const scanWebsite = async (url) => {

  const response = await axios.post(
    `${API_URL}/scan`,
    {
      url,
    }
  );

  return response.data;
};