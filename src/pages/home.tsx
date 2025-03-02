import Frame from "..//components//frame";
import Button from "../components/button";
import Card from "../components/card";
import LabeledInput from "../components/labeledInput";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      <aside className="flex flex-col gap-6 col-span-3">
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
                <h2 className="text-xl font-semibold">Rodrigo Barboni Filho</h2>
                <p className="text-xs opacity-60">rodrigobarbonifilho</p>
              </div>
            </div>
            <p className="text-base font-light">
              Dev que se diverte aprendendo e gosta de experimentar tecnologias
              diferentes.
            </p>
          </div>
          <Button
            url="www.google.com"
            label="Acessar Github"
            showIcon={true}
            iconBtnName="github"
            iconBtnSize={24}
          />
        </Frame>
        <Frame>
          <p className="italic font-light">
            “A ciência é como a malha de uma rede. À medida que você aprende
            mais, a rede se torna mais fina e mais detalhada, e a medida em que
            você chega mais perto da verdade, as coisas se tornam mais complexas
            e mais interessantes.”
          </p>
          <p className="font-medium"> - Rychard Feynman</p>
        </Frame>
      </aside>
      <main className="flex flex-col gap-6 col-span-9">
        <LabeledInput showLabel={false} />
        <h1 className="text-2xl font-bold">Repositório de CSS</h1>
        <div className="grid grid-cols-9 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Home;
