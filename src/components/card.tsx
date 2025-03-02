import Button from "./button";
import Frame from "./frame";
import Icon from "./icon";

const Card = () => {
  return (
    <Frame>
      <div>
        <iframe src="" frameborder="0"></iframe>
      </div>
      <div>
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
      <Button showIcon={false} label="Acessar Página" />
    </Frame>
  );
};

export default Card;
