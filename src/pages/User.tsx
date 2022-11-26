import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Loader, UserStats, UserDetailTop } from "../components";
import GithubContext from "../context/GithubContext";

const User = () => {
  const { getUser, getUserRepos, user, repos, loading } = useContext(GithubContext);
  const { login } = useParams();

  useEffect(() => {
    if (login) {
      getUser(login);
      getUserRepos(login);
    }
  }, []);

  if (loading) return <Loader />;

  console.log(repos);

  if (user?.login) {
    const { public_repos, public_gists, followers, following } = user;

    return (
      <div className="w-full mx-auto lg:w-10/12">
        <UserDetailTop user={user} />
        <UserStats
          public_repos={public_repos}
          public_gists={public_gists}
          followers={followers}
          following={following}
        />
      </div>
    );
  }

  return <>Pffff!))</>; // this is not for UI)
};

export default User;
