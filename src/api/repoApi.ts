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

interface IFileData {
  data: {
    content: string;
    download_url: string;
    enconding: string;
    git_url: number;
    html_url: string;
    name: string;
    path: string;
    sha: string;
    size: number;
    type: string;
    url: string;
    _links: {
      self: string;
      html: string;
      git: string;
    };
  };
}

interface ProjectConfig {
  name: string;
  show: boolean;
  description: string;
  usedTecnologies: string[];
}

const getCardsConfig = async (owner: string) => {
  const fileData: IFileData = await axiosInstance.get(
    `/repos/${owner}/CSS/contents/projects.json`
  );

  // O content vem em base64, é necessário converter para utf-8
  const binaryContent = atob(fileData.data.content);
  const byteArray = new Uint8Array(binaryContent.length);

  [...binaryContent].forEach((_, index) => {
    byteArray[index] = binaryContent.charCodeAt(index);
  });

  const decoder = new TextDecoder("utf-8");
  const decodedContent = decoder.decode(byteArray);

  const content: {
    projects: ProjectConfig[];
  } = JSON.parse(decodedContent);

  return content;
};

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

  getCardsConfig(import.meta.env.VITE_REPO_OWNER).then(
    (res: { projects: ProjectConfig[] }) => {
      console.log(res);
    }
  );

  const cardInfos: ICardInfo[] = treeData
    .filter((item) => item.path.match(/.*\.html/))
    .map((item) => ({
      url: `https://${import.meta.env.VITE_REPO_OWNER}.github.io/CSS/${
        item.path
      }`,
      dirName: capitalize(item.path.split("/")[0].replace(/-/g, " ")),
      desc: "",
      sha: item.sha,
    }));

  return cardInfos;
};
