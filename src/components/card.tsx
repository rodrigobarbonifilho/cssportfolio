import Button from "./button";
import Frame from "./frame";
import Icon from "./icon";

type CardProps = {
  data: {
    url: string;
    dirName: string;
    desc: string;
  };
};

const Card = ({
  data: {
    url = "https://www.google.com",
    dirName = "Nome do Diretório",
    desc = "descrição",
  },
}: CardProps) => {
  return (
    <Frame className="flex h-fit flex-col gap-2 md:col-span-3">
      <div className="w-full aspect-video">
        <iframe
          className="scale-[20%] origin-top-left w-[500%] h-[500%] rounded-2xl border-4 border-solid border-neutralDeep"
          src={url}
        ></iframe>
      </div>
      <div className="flex justify-start items-center">
        <h4 className="text-sm font-semibold">{dirName}</h4>
        <Icon iconName="html" iconSize={16} />
        <Icon iconName="css" iconSize={16} />
        <Icon iconName="js" iconSize={16} />
      </div>
      <p className="text-xs text-wrap line-clamp-4 h-16">{desc}</p>
      <Button
        url={url}
        showIcon={false}
        label="Acessar Página"
        target="_blank"
      />
    </Frame>
  );
};

export default Card;
