import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Loader, UserDetailTop } from "../components";
import GithubContext from "../context/GithubContext";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) getUser(id);
  }, []);

  if (loading) return <Loader />;

  return <div className="w-full mx-auto lg:w-10/12">{user?.login && <UserDetailTop user={user} />}</div>;
};

export default User;
