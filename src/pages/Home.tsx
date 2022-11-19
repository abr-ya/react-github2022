import { UserResults } from "../components";
import { GithubProvider } from "../context/GithubContext";

const Home = () => {
  return (
    <GithubProvider>
      <h1>Hello, React Github App!</h1>
      <UserResults />
    </GithubProvider>
  );
};

export default Home;
