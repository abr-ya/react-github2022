import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Loader, UserStats, UserDetailTop } from "../components";
import GithubContext from "../context/GithubContext";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) getUser(id);
  }, []);

  if (loading) return <Loader />;

  const { public_repos, public_gists, followers, following } = user;

  return (
    <div className="w-full mx-auto lg:w-10/12">
      {user?.login && <UserDetailTop user={user} />}
      <UserStats public_repos={public_repos} public_gists={public_gists} followers={followers} following={following} />
    </div>
  );
};

export default User;
