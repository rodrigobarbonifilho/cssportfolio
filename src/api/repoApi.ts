import axiosInstance from "./axiosInstance";

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

  const capitalize = (text: string) => {
    return text
      .split(" ")
      .map(
        (substring) =>
          substring.charAt(0).toUpperCase() + substring.slice(1).toLowerCase()
      )
      .join(" ");
  };

  const cardInfos: ICardInfo[] = treeData
    .filter((item) => item.path.match(/.*\.html/))
    .map((item) => ({
      url: `https://rodrigobarbonifilho.github.io/CSS/${item.path}`,
      dirName: capitalize(item.path.split("/")[0].replace(/-/g, " ")),
      desc: "",
      sha: item.sha,
    }));

  return cardInfos;
};
