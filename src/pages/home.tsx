import Frame from "..//components//frame";
import Button from "../components/button";
import Card from "../components/card";
import Icon from "../components/icon";
import LabeledInput from "../components/labeledInput";
import { getCardsInfo, ICardInfo } from "../api/repoApi";
import { useEffect, useState } from "react";

const Home = () => {
  const [cardsInfo, setCardsInfo] = useState<ICardInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCardsInfo("rodrigobarbonifilho");
      setCardsInfo(res);
    };

    fetchData();
  }, [cardsInfo]);

  console.log(cardsInfo);

  return (
    <div className="p-4 md:p-6 md:overflow-hidden h-screen">
      <div className="flex flex-col md:grid grid-cols-12 gap-4 md:gap-6 h-fit md:h-calc-100vh-48px overflow-hidden">
        <aside className="flex flex-col gap-4 md:gap-6 col-span-3 h-fit md:h-calc-100vh-48px overflow-scroll">
          <Frame className="flex flex-col gap-4">
            <div className="flex md:flex-col h-24 md:h-fit gap-6">
              <div className="aspect-square h-full md:h-auto">
                <img
                  className="rounded-full border-2 border-solid border-neutralDeep md:w-full"
                  src="https://github.com/rodrigobarbonifilho.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-">
                    <h2 className="text-xl font-semibold">
                      Rodrigo Barboni Filho
                    </h2>
                    <a
                      href="https://www.github.com/rodrigobarbonifilho"
                      target="_blank"
                      className="flex gap-1 text-xs opacity-60 hover:underline"
                    >
                      rodrigobarbonifilho
                      <Icon iconName="external" iconSize={10} />
                    </a>
                  </div>
                </div>
                <p className="text-sm font-light">
                  Dev que se diverte aprendendo e gosta de experimentar
                  tecnologias diferentes.
                </p>
              </div>
            </div>
            <Button
              url="https://www.github.com/rodrigobarbonifilho"
              label="Acessar Github"
              showIcon={true}
              iconBtnName="github"
              iconBtnSize={16}
              target="_blank"
            />
          </Frame>
          <Frame className="flex flex-col gap-2 text-sm">
            <p className="italic font-light">
              “A ciência é como a malha de uma rede. À medida que você aprende
              mais, a rede se torna mais fina e mais detalhada, e a medida em
              que você chega mais perto da verdade, as coisas se tornam mais
              complexas e mais interessantes.”
            </p>
            <p className="font-medium"> - Rychard Feynman</p>
          </Frame>
        </aside>
        <main className="flex flex-col gap-4 md:gap-6 col-span-9 md:overflow-hidden h-fit md:h-calc-100vh-48px overflow-scroll">
          <LabeledInput showLabel={false} />
          <h1 className="text-2xl font-bold">Repositório de CSS</h1>
          <div className="grid grid-cols-1 md:grid-cols-9 md:gap-6 gap-4 overflow-scroll h-fit pb-4 md:pb-0 md:h-calc-100vh-48px">
            {cardsInfo.map(({ url, dirName, desc, sha }) => {
              return (
                <Card
                  data={{ url: url, dirName: dirName, desc: desc }}
                  key={sha}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
