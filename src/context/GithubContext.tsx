import { createContext, FC, ReactNode, useReducer } from "react";
import { IUser } from "../interfaces";
import { findUsersReguest } from "../services/api";
import githubReducer from "./GithubReducer";

type GithubContextType = ReturnType<typeof GithubManager>;

const initialContext = {
  users: [],
  loading: true,
  findUsers: () => false,
  clearUsers: () => false,
};
const GithubContext = createContext<GithubContextType>(initialContext);

interface IGithubManagerResult {
  users: IUser[];
  loading: boolean;
  findUsers: (text: string) => void;
  clearUsers: () => void;
}

const GithubManager = (initialUsers: IUser[]): IGithubManagerResult => {
  const initialState = {
    users: initialUsers,
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const findUsers = async (text: string) => {
    setLoading();
    const { data, status } = await findUsersReguest(text);
    console.log(data, status);

    setTimeout(() => {
      console.log("Loading delay from Context!");
      dispatch({
        type: "SET_USERS",
        payload: data.items,
      });
    }, 500);
  };

  // Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Clear Users
  const clearUsers = () =>
    dispatch({
      type: "SET_USERS",
      payload: [],
    });

  return { ...state, findUsers, clearUsers };
};

const startValues = [];

export const GithubProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <GithubContext.Provider value={GithubManager(startValues)}>{children}</GithubContext.Provider>
);

export default GithubContext;
