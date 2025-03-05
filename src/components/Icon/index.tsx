import { IoSearchSharp } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaJs } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";
import { IoSad } from "react-icons/io5";

interface IIconMap {
  [key: string]: React.ElementType;
}

type IconProps = {
  iconName: keyof IIconMap;
  iconSize?: number;
  className?: string;
  color?: string;
};

const iconMap: IIconMap = {
  search: IoSearchSharp,
  filter: IoFilterSharp,
  error: MdError,
  github: FaGithub,
  html: FaHtml5,
  css: DiCss3,
  js: FaJs,
  external: TbExternalLink,
  sadFace: IoSad,
};

const Icon = ({
  iconName,
  iconSize = 24,
  className = "",
  color = "",
}: IconProps) => {
  const IconComponent = iconMap[iconName] || iconMap.error;

  return (
    <div
      className={`flex justify-center items-center aspect-square ${className}`}
    >
      <IconComponent color={color} size={iconSize} />
    </div>
  );
};

export default Icon;
