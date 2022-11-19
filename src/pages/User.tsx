import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import GithubContext from "../context/GithubContext";

const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) getUser(id);
  }, []);

  if (loading) return <Loader />;

  return <div>{user?.login}</div>;
};

export default User;
