import { UserResults, UsersSearch } from "../components";
import { GithubProvider } from "../context/GithubContext";

const Home = () => {
  return (
    <GithubProvider>
      <UsersSearch />
      <UserResults />
    </GithubProvider>
  );
};

export default Home;
