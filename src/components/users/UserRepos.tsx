import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import RepoDetail from "./RepoDetail";

const UserRepos = () => {
  const { repos } = useContext(GithubContext);

  if (!repos && !repos?.length) return null;

  const title = "Latest"; // можно сделать гибким, параметризировав запрос

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">{title} Repositories</h2>
        {repos.map((repo) => (
          <RepoDetail key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
