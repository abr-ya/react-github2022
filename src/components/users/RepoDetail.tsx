import { IRepo } from "../../interfaces";

const RepoDetail = ({ repo }: { repo: IRepo }) => {
  return <div>{repo.name}</div>;
};

export default RepoDetail;
