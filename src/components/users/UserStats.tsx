import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

interface IUserStats {
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

const UserStats = ({ public_repos, public_gists, followers, following }: IUserStats) => {
  return (
    <>
      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Followers</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">{followers}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Following</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">{following}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Repos</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">{public_repos}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Gists</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">{public_gists}</div>
        </div>
      </div>
    </>
  );
};

export default UserStats;
