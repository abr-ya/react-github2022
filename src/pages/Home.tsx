import { UserResults, UsersSearch } from "../components";
import { GithubProvider } from "../context/GithubContext";

const Home = () => {
  return (
    <GithubProvider>
      <h1>Hello, React Github App!</h1>
      <UsersSearch />
      <UserResults />
    </GithubProvider>
  );
};

export default Home;
