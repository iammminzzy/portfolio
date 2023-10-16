import {
  FiExternalLink,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { IconBaseProps } from "react-icons/lib";

export type IconType =
  | "Github"
  | "Instagram"
  | "Linkedin"
  | "Twitter"
  | "Youtube"
  | "External";

interface IconProps extends IconBaseProps {
  name: IconType | string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case "Github": {
      return <FiGithub {...props} />;
    }
    case "Instagram": {
      return <FiInstagram {...props} />;
    }
    case "Linkedin": {
      return <FiLinkedin {...props} />;
    }
    case "Twitter": {
      return <FiTwitter {...props} />;
    }
    case "Youtube": {
      return <FiYoutube {...props} />;
    }
    case "External":
    default: {
      return <FiExternalLink {...props} />;
    }
  }
};
