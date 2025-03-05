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
  webIconSize?: number;
  mobileIconSize?: number;
  className?: string;
  color?: string;
};

const Icon = ({
  iconName,
  webIconSize = 24,
  mobileIconSize = 16,
  className = "",
  color = "",
}: IconProps) => {
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

  const IconComponent = iconMap[iconName] || iconMap.error;

  const windowWidth = window.innerWidth;

  return (
    <div
      className={`flex justify-center items-center aspect-square ${className}`}
    >
      <IconComponent
        size={windowWidth < 768 ? mobileIconSize : webIconSize}
        color={color}
      />
    </div>
  );
};

export default Icon;
