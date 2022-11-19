import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { IUser } from "../interfaces";
import { getUsersReguest } from "../services/api";

type GithubContextType = ReturnType<typeof GithubManager>;

const GithubContext = createContext<GithubContextType>({
  users: [],
  isLoading: true,
  // findUsers: () => false,
});

interface IGithubManagerResult {
  users: IUser[];
  isLoading: boolean;
  // findUsers: () => void;
}

const GithubManager = (initialUsers: IUser[]): IGithubManagerResult => {
  const [users, setUsers] = useState(initialUsers);
  const [isLoading, setIsLoading] = useState(true);

  const findUsers = async () => {
    const { data, status } = await getUsersReguest();
    console.log(data, status);

    setUsers(data);
    setTimeout(() => {
      console.log("Loading delay from Context!");
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    findUsers();
  }, []);

  return { users, isLoading };
};

const startValues = [];

export const GithubProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <GithubContext.Provider value={GithubManager(startValues)}>{children}</GithubContext.Provider>
);

export default GithubContext;
