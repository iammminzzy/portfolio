import Link from "next/link";

import Side from "@/components/sides/Side";
import { email } from "@/libs/data";

const Email = () => {
  return (
    <Side orientation="right">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm tracking-wider hover:text-pointYellow [writing-mode:vertical-lr]">
          <Link href={`mailto: ${email}`}>{email}</Link>
        </p>
        <div className="w-0.5 h-24 bg-dark mt-5" />
      </div>
    </Side>
  );
};
export default Email;
