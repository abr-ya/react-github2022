import axios from "axios";

const baseUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const createOptions = () => ({
  headers: {
    Authorization: `token ${process.env.API_KEY}`,
  },
});

export const getUsersReguest = async () => {
  const { data, status } = await axios.get(`${baseUrl}users`, createOptions());

  return { data, status };
};
