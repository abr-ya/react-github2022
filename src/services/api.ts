import axios from "axios";

const baseUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export const getTodosReguest = async () => {
  const { data, status } = await axios.get(`${baseUrl}todos?_limit=10`);

  return { data, status };
};
