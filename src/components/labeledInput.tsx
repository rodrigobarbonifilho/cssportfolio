import Icon from "./icon";

type LabeledInputProps = {
  showLabel: boolean;
  label?: string;
};

const LabeledInput = ({ showLabel, label = "" }: LabeledInputProps) => {
  return (
    <div className="flex flex-col gap-0">
      {showLabel ? (
        <label className="text-xs font-medium" htmlFor="search">
          {label}
        </label>
      ) : null}
      <div className="flex px-4 py-3 bg-neutralBase gap-4 text-base rounded border-solid border-2 border-neutralDeep">
        <Icon iconName="search" iconSize={24} />
        <input
          className="w-full bg-neutralBase focus:outline-none"
          name="search"
          type="text"
          placeholder="Procure por um projeto aqui"
        />
        <Icon iconName="filter" iconSize={24} />
      </div>
    </div>
  );
};

export default LabeledInput;
