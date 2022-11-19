import { createContext, FC, ReactNode, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { IUser, IUserDetail } from "../interfaces";
import { findUsersReguest, getUserReguest } from "../services/api";
import githubReducer from "./GithubReducer";

type GithubContextType = ReturnType<typeof GithubManager>;

const initialContext = {
  users: [],
  user: null,
  loading: true,
  findUsers: () => false,
  getUser: () => false,
  clearUsers: () => false,
};
const GithubContext = createContext<GithubContextType>(initialContext);

interface IGithubManagerResult {
  users: IUser[];
  user: IUserDetail | null;
  loading: boolean;
  findUsers: (text: string) => void;
  getUser: (text: string) => void;
  clearUsers: () => void;
}

const GithubManager = (initialUsers: IUser[]): IGithubManagerResult => {
  const navigate = useNavigate();

  const initialState = {
    users: initialUsers,
    user: null,
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
  const stopLoading = () => dispatch({ type: "STOP_LOADING" });

  // Clear Users
  const clearUsers = () =>
    dispatch({
      type: "SET_USERS",
      payload: [],
    });

  // Get single user
  const getUser = async (id) => {
    console.log("getUser", id);
    setLoading();

    const { status, data } = await getUserReguest(id);
    console.log(status, data); // data === undefined if Error

    if (status === 404) {
      stopLoading();
      navigate("/404");
    } else {
      dispatch({
        type: "SET_USER",
        payload: data,
      });
    }
  };

  return { ...state, findUsers, clearUsers, getUser };
};

const startValues = [];

export const GithubProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <GithubContext.Provider value={GithubManager(startValues)}>{children}</GithubContext.Provider>
);

export default GithubContext;
