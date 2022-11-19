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

export const findUsersReguest = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });
  const { data, status } = await axios.get(`${baseUrl}search/users?${params}`, createOptions());

  return { data, status };
};
