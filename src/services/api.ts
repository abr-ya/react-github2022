import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const createOptions = () => ({
  headers: {
    Authorization: `token ${apiKey}`,
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

export const getUserReguest = async (text: string) => {
  let response: AxiosResponse;
  let status: number;

  try {
    response = await axios.get(`${baseUrl}users/${text}`, createOptions());
    status = response?.status;
  } catch (err) {
    console.log(err);
    status = err.response?.status;
  }

  return { data: response?.data, status };
};

export const getUserReposReguest = async (login: string) => {
  const params = new URLSearchParams({ sort: "created", per_page: "10" });
  const { data, status } = await axios.get(`${baseUrl}users/${login}/repos?${params}`, createOptions());

  return { data, status };
};
