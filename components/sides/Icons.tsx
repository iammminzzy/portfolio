import {
  FiExternalLink,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { IconBaseProps } from "react-icons/lib";

interface IconProps extends IconBaseProps {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case "GitHub":
      return <FiGithub {...props} />;
    case "Instagram":
      return <FiInstagram {...props} />;
    case "Linkedin":
      return <FiLinkedin {...props} />;
    case "Twitter":
      return <FiTwitter {...props} />;
    default:
      return <FiExternalLink {...props} />;
  }
};
