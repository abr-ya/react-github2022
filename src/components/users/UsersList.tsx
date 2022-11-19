import { useContext } from "react";
import { Loader } from "..";
import GithubContext from "../../context/GithubContext";
import UserCard from "./UserCard";

const UsersList = () => {
  const { users, isLoading } = useContext(GithubContext);

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
