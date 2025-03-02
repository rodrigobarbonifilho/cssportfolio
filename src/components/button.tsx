import Icon from "./icon";

type ButtonProps = {
  url: string;
  label: string;
  showIcon: boolean;
  iconBtnName?: string;
  iconBtnSize?: number;
};

const Button = ({
  url,
  label,
  showIcon,
  iconBtnName = "",
  iconBtnSize = 0,
}: ButtonProps) => {
  return (
    <div className="flex justify-center outline-2 outline outline-outlineBtnColor items-center gap-3 rounded p-3 text-base font-semibold w-full bg-neutralDeep text-neutralBase">
      <a className="flex justify-center items-center gap-4" href={url}>
        {showIcon ? (
          <Icon iconName={iconBtnName} iconSize={iconBtnSize} />
        ) : null}
        {label}
      </a>
    </div>
  );
};

export default Button;
