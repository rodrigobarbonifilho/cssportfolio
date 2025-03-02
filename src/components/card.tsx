import Button from "./button";
import Frame from "./frame";
import Icon from "./icon";

const Card = () => {
  return (
    <Frame className="col-span-3">
      <div className="w-full">
        <img
          className="w-full bacg"
          src="https://www.github.com/rodrigobarbonifilho.png"
          alt=""
        />
      </div>
      <div className="flex">
        <h4>Nome do Diretório</h4>
        <Icon iconName="html" iconSize={16} />
        <Icon iconName="css" iconSize={16} />
        <Icon iconName="js" iconSize={16} />
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        obcaecati dolorem quae hic placeat, pariatur deserunt quidem ullam
        numquam sapiente asperiores saepe consequatur. Totam, velit repellat.
        Voluptatibus atque ab consequuntur?
      </p>
      <Button url="www.google.com" showIcon={false} label="Acessar Página" />
    </Frame>
  );
};

export default Card;
