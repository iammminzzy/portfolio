import Link from "next/link";

import Side from "@/components/sides/Side";
import { socialMedia } from "@/static/data";

import { Icon } from "../common/Icons";

const Social = () => {
  return (
    <Side orientation="left">
      <ul className="flex flex-col items-center gap-2">
        {socialMedia.map(({ name, url }) => (
          <li
            key={name}
            className="w-10 h-10 p-[10px] inline-flex justify-center items-center hover:text-pointYellow hover:-translate-y-1 transition-all duration-300 delay-75"
          >
            <Link href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} size={20} />
            </Link>
          </li>
        ))}
        <div className="w-0.5 h-24 bg-dark mt-5" />
      </ul>
    </Side>
  );
};
export default Social;
