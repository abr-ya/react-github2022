import { useEffect, useState } from "react";
import { Loader } from "..";
import { getUsersReguest } from "../../services/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const { data, status } = await getUsersReguest();
    console.log(data, status);

    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <h3 key={user.id}>{user.login}</h3>
      ))}
    </div>
  );
};

export default UsersList;
