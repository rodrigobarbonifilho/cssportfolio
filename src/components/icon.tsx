import { IoSearchSharp } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";

interface IIconMap {
  [key: string]: React.ElementType;
}

type IconProps = {
  iconName: keyof IIconMap;
  iconSize: number;
};

const Icon = ({ iconName, iconSize }: IconProps) => {
  const iconMap: IIconMap = {
    search: IoSearchSharp,
    filter: IoFilterSharp,
    error: MdError,
  };

  const IconComponent = iconMap[iconName] || iconMap.error;

  return (
    <div className="flex justify-center items-center w-6 aspect-square">
      <IconComponent size={iconSize} />
    </div>
  );
};

export default Icon;
