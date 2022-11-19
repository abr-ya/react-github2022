import { createContext, FC, ReactNode, useEffect, useReducer, useState } from "react";
import { IUser } from "../interfaces";
import { getUsersReguest } from "../services/api";
import githubReducer from "./GithubReducer";

type GithubContextType = ReturnType<typeof GithubManager>;

const initialContext = {
  users: [],
  loading: true,
  // findUsers: () => false,
};
const GithubContext = createContext<GithubContextType>(initialContext);

interface IGithubManagerResult {
  users: IUser[];
  loading: boolean;
  // findUsers: () => void;
}

const GithubManager = (initialUsers: IUser[]): IGithubManagerResult => {
  const initialState = {
    users: initialUsers,
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const findUsers = async () => {
    setLoading();
    const { data, status } = await getUsersReguest();
    console.log(data, status);

    setTimeout(() => {
      console.log("Loading delay from Context!");
      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    }, 500);
  };

  useEffect(() => {
    findUsers();
  }, []);

  // Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return { ...state };
};

const startValues = [];

export const GithubProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <GithubContext.Provider value={GithubManager(startValues)}>{children}</GithubContext.Provider>
);

export default GithubContext;
