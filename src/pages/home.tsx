import Frame from "..//components//frame";
import Button from "../components/button";
import Card from "../components/card";
import Icon from "../components/icon";
import LabeledInput from "../components/labeledInput";

const Home = () => {
  return (
    <div className="p-6 overflow-hidden h-screen">
      <div className="grid grid-cols-12 gap-6 h-calc-100vh-48px overflow-hidden">
        <aside className="flex flex-col gap-6 col-span-3 h-calc-100vh-48px overflow-scroll">
          <Frame>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-square">
                  <img
                    className="rounded-full border-2 border-solid border-neutralDeep w-full"
                    src="https://github.com/rodrigobarbonifilho.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <h2 className="text-xl font-semibold">
                    Rodrigo Barboni Filho
                  </h2>
                  <a
                    href="https://www.github.com/rodrigobarbonifilho"
                    target="_blank"
                    className="flex gap-1 text-xs opacity-60 hover:underline"
                  >
                    rodrigobarbonifilho
                    <Icon iconName="external" iconSize={12} />
                  </a>
                </div>
              </div>
              <p className="text-base font-light">
                Dev que se diverte aprendendo e gosta de experimentar
                tecnologias diferentes.
              </p>
            </div>
            <Button
              url="https://www.github.com/rodrigobarbonifilho"
              label="Acessar Github"
              showIcon={true}
              iconBtnName="github"
              iconBtnSize={24}
              target="_blank"
            />
          </Frame>
          <Frame>
            <p className="italic font-light">
              “A ciência é como a malha de uma rede. À medida que você aprende
              mais, a rede se torna mais fina e mais detalhada, e a medida em
              que você chega mais perto da verdade, as coisas se tornam mais
              complexas e mais interessantes.”
            </p>
            <p className="font-medium"> - Rychard Feynman</p>
          </Frame>
        </aside>
        <main className="flex flex-col gap-6 col-span-9 overflow-hidden h-calc-100vh-48px">
          <LabeledInput showLabel={false} />
          <h1 className="text-2xl font-bold">Repositório de CSS</h1>
          <div className="grid grid-cols-9 gap-6 overflow-scroll h-full">
            <Card url="" dirName="" desc="" />
            <Card url="" dirName="" desc="" />
            <Card url="" dirName="" desc="" />
            <Card url="" dirName="" desc="" />
            <Card url="" dirName="" desc="" />
            <Card url="" dirName="" desc="" />
            <Card url="" dirName="" desc="" />
            <Card url="" dirName="" desc="" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
