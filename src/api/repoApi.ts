import axiosInstance from "./axiosInstance";

// interface IRepoContent {
//   download_url: string;
//   git_url: string;
//   html_url: string;
//   name: string;
//   path: string;
//   sha: string;
//   size: number;
//   type: "dir" | "file";
//   url: string;
//   _link: [
//     {
//       self: string;
//       html: string;
//       git: string;
//     }
//   ];
// }

interface ITreeNode {
  mode: string;
  path: string;
  sha: string;
  size: number;
  type: "tree" | "blob";
  url: string;
}

export interface ICardInfo {
  url: string;
  dirName: string;
  desc: string;
  sha: string;
}

export const getCardsInfo = async (owner: string) => {
  const response = await axiosInstance.get(
    `/repos/${owner}/CSS/git/trees/main?recursive=1`
  );
  const treeData: ITreeNode[] = response.data.tree;
  console.log(treeData.filter((item) => item.path.match(/.*\.html/)));

  const cardInfos: ICardInfo[] = treeData
    .filter((item) => item.path.match(/.*\.html/))
    .map((item) => ({
      url: `https://rodrigobarbonifilho.github.io/CSS/${item.path}`,
      dirName: item.path.split("/")[0],
      desc: "",
      sha: item.sha,
    }));

  return cardInfos;
};
